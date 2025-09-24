// gatsby-node.js
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	
	// Note: gatsby-remark-relative-images is no longer needed in Gatsby v5
	// Gatsby v5 handles relative image paths automatically with the new image processing
	
	// If you need to create slugs for your content, you can do it like this:
	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: 'slug',
			node,
			value,
		});
	}
};