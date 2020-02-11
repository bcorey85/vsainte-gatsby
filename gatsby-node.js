// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const remark = require('remark');
const remarkHTML = require('remark-html');

exports.onCreateNode = ({ node }) => {
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
	return node;
};
