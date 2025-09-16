// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	//Transform image paths to relative for Gatsby internals
	fmImagesToRelative(node);
};
