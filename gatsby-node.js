// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	//Transform image paths to relative for Gatsby internals
	fmImagesToRelative(node);

	//Parse blog titles to <em> from markdown frontmatter
	if (node.internal.type === 'MarkdownRemark') {
		if (
			node.frontmatter.type === 'blog-post' &&
			node.frontmatter.title.indexOf('*') >= 0
		) {
			const title = node.frontmatter.title.split('*');
			const tags = [ '<em>', '</em>' ];
			const htmlTitle = tags[0]
				.concat(title[1])
				.concat(tags[1])
				.concat(title[2]);

			node.frontmatter.title = htmlTitle;
		}
	}

	const { createNodeField } = actions;
	if (
		node.internal.type === `MarkdownRemark` &&
		node.frontmatter.type === 'blog-post'
	) {
		//Add slug to Graphql blog query, value adds starting /
		const value = createFilePath({ node, getNode });
		const year = node.frontmatter.date.substring(0, 4);
		console.log(year, value);
		createNodeField({
			name: `path`,
			node,
			value: `/blog/${year}${value}`
		});

		//Add year to Graphql blog query
		createNodeField({
			name: 'year',
			node,
			value: year
		});
	}
};

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.js`);
	//Create Blog Pages
	const result = await graphql(`
    {
		allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog-post"}}}) {
			edges {
			node {
				fields {
				path
				}
			}
			}
		}
	}
  `);
	console.log(result.data.allMarkdownRemark.edges);
	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.path,
			component: blogPostTemplate,
			context: {}
		});
	});
	// 	.then(result => {
	// 	if (result.errors) {
	// 		result.errors.forEach(e => console.error(e.toString()));
	// 		return Promise.reject(result.errors);
	// 	}

	// 	const posts = result.data.allMarkdownRemark.edges;

	//   posts.forEach(edge => {
	// 	  const id = edge.node.id;
	// 	  createPage({
	// 		  path: edge.node.fields.slug,
	// 		  component: path.resolve(
	// 			  `src/templates/${String(
	// 				  edge.node.frontmatter.templateKey
	// 			  )}.js`
	// 		  ),
	// 		  // additional data can be passed via context
	// 		  context: {
	// 			  id
	// 		  }
	// 	  });
	//   });
	// });
};
