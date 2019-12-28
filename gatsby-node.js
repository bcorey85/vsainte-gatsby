// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require('path');
// const eventPhotos = require('./src/json/event-photos.json');
// // relative path from `gatsby-node.js`
// const IMAGE_PATH = './src/images/event-photos';

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// 	eventPhotos.photos.map(photo => {
// 		const { src, alt } = photo;
// 		const { name, ext } = path.parse(src);
// 		const absolutePath = path.resolve(__dirname, IMAGE_PATH, src);

// 		const data = {
// 			name,
// 			ext,
// 			absolutePath,
// 			extension: ext.substring(1)
// 		};

// 		const imageNode = {
// 			...data,
// 			id: createNodeId(`photo-${name}`),
// 			internal: {
// 				type: 'EventPhotoImage',
// 				contentDigest: createContentDigest(data)
// 			}
// 		};

// 		actions.createNode(imageNode);

// 		const node = {
// 			src,
// 			alt,
// 			image: imageNode,
// 			id: createNodeId(`photo-${alt}`),
// 			internal: {
// 				type: 'EventPhoto',
// 				contentDigest: createContentDigest(photo)
// 			}
// 		};

// 		actions.createNode(node);
// 	});
// };
