import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';
import useMostRecentYear from '../hooks/useMostRecentYear';
import Section from '../components/shared/Section';
import BlogPost from '../components/BlogPost';
import SEO from '../components/Seo';

import blogJSON from '../json/blog-posts.json';
import './blog.css';

const Blog = ({ location }) => {
	const blogData = useStaticQuery(blogQuery);
	const blogObject = {
		2020: blogData.year2.edges,
		2019: blogData.year1.edges
	};
	const [ mostRecentYear ] = useMostRecentYear(blogObject);
	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogObject[mostRecentYear]
	);

	console.log(blogObject);
	console.log(blogJSON);

	useEffect(
		() => {
			if (location.state) {
				if (location.state.index >= 0)
					setSelectedPosts(
						blogJSON.posts[mostRecentYear][location.state.index]
					);
			}
		},
		[ mostRecentYear, location.state ]
	);

	useScrollToTop(selectedPosts);

	const renderPosts = data => {
		console.log(data);
		if (Array.isArray(data)) {
			return data.map(post => {
				return (
					<BlogPost
						key={post.node.id}
						date={post.node.frontmatter.date}
						title={ReactHtmlParser(post.node.frontmatter.title)}
						mediaType={
							post.node.frontmatter.image ? 'image' : 'video'
						}
						src={
							post.node.frontmatter.image ? (
								post.node.frontmatter.image.childImageSharp
									.fluid
							) : (
								post.node.frontmatter.video
							)
						}
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
				key={data.node.id}
				date={data.node.frontmatter.date}
				title={ReactHtmlParser(data.node.frontmatter.title)}
				mediaType={data.node.frontmatter.image ? 'image' : 'video'}
				src={
					data.node.frontmatter.image ? (
						data.node.frontmatter.image.childImageSharp.fluid
					) : (
						data.node.frontmatter.video
					)
				}
				alt={data.node.frontmatter.image_desc}
				body={data.node.html}
				link={data.node.frontmatter.link}
				linkTxt={data.node.frontmatter.link_text}
			/>
		);
	};

	const filterByTitle = selectedTitle =>
		blogJSON.posts[selectedYear].filter(post => {
			if (post.title === selectedTitle) {
				return post;
			}
			return null;
		});

	const viewAll = () => {
		const allRendered =
			selectedPosts.length >= 1 &&
			blogJSON.posts[selectedYear].length === selectedPosts.length;

		if (!allRendered) {
			return (
				<ul>
					<li>
						<button
							className='link-caps'
							onClick={() => {
								setSelectedPosts(blogJSON.posts[selectedYear]);
							}}>
							View All
						</button>
					</li>
				</ul>
			);
		}
		return '';
	};

	const blogPosts = renderPosts(selectedPosts);

	// const postTitleLinks = blogJSON.posts[selectedYear].map(post => (
	// 	<li key={post.title}>
	// 		<button
	// 			className='link'
	// 			onClick={() => setSelectedPosts(filterByTitle(post.title))}>
	// 			{ReactHtmlParser(post.title)}
	// 		</button>
	// 	</li>
	// ));
	const postTitleLinks = blogObject[selectedYear].map(post => (
		<li key={post.node.id}>
			<button
				className='link'
				onClick={() =>
					setSelectedPosts(
						filterByTitle(post.node.frontmatter.title)
					)}>
				{ReactHtmlParser(post.node.frontmatter.title)}
			</button>
		</li>
	));
	// const yearsLinks = Object.keys(blogJSON.posts)
	// 	.sort((a, b) => b - a)
	// 	.map(year => (
	// 		<li key={year}>
	// 			<button
	// 				className='link'
	// 				onClick={() => {
	// 					setSelectedPosts(blogJSON.posts[year]);
	// 					setSelectedYear(year);
	// 				}}>
	// 				{year}
	// 			</button>
	// 		</li>
	// 	));
	const yearsLinks = Object.keys(blogObject)
		.sort((a, b) => b - a)
		.map(year => (
			<li key={year}>
				<button
					className='link'
					onClick={() => {
						setSelectedPosts(blogObject[year]);
						setSelectedYear(year);
					}}>
					{year}
				</button>
			</li>
		));

	return (
		<React.Fragment>
			<SEO title='Blog' />

			<Section>
				<div className='blog'>
					<h1 className='page-title'>Blog</h1>
					<div className='blog-content'>
						<div className='blog-content__left'>{blogPosts}</div>
						<div className='blog-content__right'>
							<div className='blog__post-titles'>
								<div className='blog__post-titles-header'>
									<h4>Post Titles</h4>
									{viewAll()}
								</div>

								<ul>{postTitleLinks}</ul>
							</div>
							<div className='blog__oldlinks'>
								<h4>Posts by Year</h4>
								<ul>{yearsLinks}</ul>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default Blog;

const blogQuery = graphql`
	query Blog {
		year2: allMarkdownRemark(
			filter: {
				frontmatter: { type: { eq: "blog-post" } }
				fileAbsolutePath: { regex: "/2020/" }
			}
			sort: { fields: frontmatter___date, order: ASC }
		) {
			edges {
				node {
					id
					frontmatter {
						image_desc
						date(formatString: "MMMM Do, YYYY")
						image {
							childImageSharp {
								fluid(maxWidth: 630) {
									...GatsbyImageSharpFluid
								}
							}
						}
						link
						link_text
						location
						title
						video
					}
					html
				}
			}
		}
		year1: allMarkdownRemark(
			filter: {
				frontmatter: { type: { eq: "blog-post" } }
				fileAbsolutePath: { regex: "/2019/" }
			}
			sort: { fields: frontmatter___date, order: ASC }
		) {
			edges {
				node {
					id
					frontmatter {
						image_desc
						date(formatString: "MMMM Do, YYYY")
						image {
							childImageSharp {
								fluid(maxWidth: 630) {
									...GatsbyImageSharpFluid
								}
							}
						}
						link
						link_text
						location
						title
						video
					}
					html
				}
			}
		}
	}
`;
