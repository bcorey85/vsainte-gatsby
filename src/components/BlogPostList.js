import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import BlogPost from './BlogPost';

const BlogPostList = ({ selectedPosts }) => {
	const setMediaType = data => {
		let post;
		if (data.node) {
			post = data.node;
		} else {
			post = data;
		}

		if (post.frontmatter.image) {
			return {
				mediaType: 'image',
				src: post.frontmatter.image.childImageSharp.fluid
			};
		} else if (data.frontmatter.video) {
			return {
				mediaType: 'video',
				src: post.frontmatter.video
			};
		} else {
			return {
				mediaType: null,
				src: null
			};
		}
	};

	const renderPosts = data => {
		if (Array.isArray(data)) {
			return data.map(post => {
				return (
					<BlogPost
						key={post.node.id}
						date={post.node.frontmatter.date}
						title={ReactHtmlParser(post.node.frontmatter.title)}
						mediaType={setMediaType(post).mediaType}
						src={setMediaType(post).src}
						alt={post.node.frontmatter.image_desc}
						body={post.node.html}
						link={post.node.frontmatter.link}
						linkTxt={post.node.frontmatter.link_text}
					/>
				);
			});
		}
		return (
			<BlogPost
				key={data.id}
				date={data.frontmatter.date}
				title={ReactHtmlParser(data.frontmatter.title)}
				mediaType={setMediaType(data).mediaType}
				src={setMediaType(data).src}
				alt={data.frontmatter.image_desc}
				body={data.html}
				link={data.frontmatter.link}
				linkTxt={data.frontmatter.link_text}
			/>
		);
	};
	const blogPosts = renderPosts(selectedPosts);
	return <div>{blogPosts}</div>;
};

export default BlogPostList;
