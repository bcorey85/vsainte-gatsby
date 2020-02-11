// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');

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

	//Add slug to GraphQl query
	const { createNodeField } = actions;
	if (
		node.internal.type === `MarkdownRemark` &&
		node.frontmatter.type === 'blog-post'
	) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value: `/blog${value}`
		});
	}
};
