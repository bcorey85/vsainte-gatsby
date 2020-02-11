import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';
import useMostRecentYear from '../hooks/useMostRecentYear';
import Section from '../components/shared/Section';
import BlogPost from '../components/BlogPost';
import SEO from '../components/Seo';

import './blog.css';

const Blog = ({ location }) => {
	const blogData = useStaticQuery(blogQuery);
	//Rename query aliases to years
	const blogObject = {
		2020: blogData.year2.edges,
		2019: blogData.year1.edges
	};
	const [ mostRecentYear ] = useMostRecentYear(blogObject);
	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogObject[mostRecentYear]
	);

	//Handle 'recent blog post' links from index page
	useEffect(() => {
		if (location.state) {
			if (location.state.index >= 0)
				setSelectedPosts(
					blogObject[mostRecentYear][location.state.index]
				);
		}
	}, []);

	//Scroll to top of page on selectedPosts state change
	useScrollToTop(selectedPosts);

	const setMediaType = post => {
		if (post.node.frontmatter.image) {
			return {
				mediaType: 'image',
				src: post.node.frontmatter.image.childImageSharp.fluid
			};
		} else if (post.node.frontmatter.video) {
			return {
				mediaType: 'video',
				src: post.node.frontmatter.video
			};
		} else {
			return {
				mediaType: null,
				src: null
			};
		}
	};

	//Handle rendering blog post array ('view all') or individual post
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
				key={data.node.id}
				date={data.node.frontmatter.date}
				title={ReactHtmlParser(data.node.frontmatter.title)}
				mediaType={setMediaType(data).mediaType}
				src={setMediaType(data).src}
				alt={data.node.frontmatter.image_desc}
				body={data.node.html}
				link={data.node.frontmatter.link}
				linkTxt={data.node.frontmatter.link_text}
			/>
		);
	};

	const blogPosts = renderPosts(selectedPosts);

	//Set selected post after filtering array by title
	const filterByTitle = selectedTitle =>
		blogObject[selectedYear].filter(post => {
			if (post.node.frontmatter.title === selectedTitle) {
				return post;
			}
			return null;
		});

	//Show all blog title links from selectedYear
	const viewAll = () => {
		const allRendered =
			selectedPosts.length >= 1 &&
			blogObject[selectedYear].length === selectedPosts.length;

		if (!allRendered) {
			return (
				<ul>
					<li>
						<button
							className='link-caps'
							onClick={() => {
								setSelectedPosts(blogObject[selectedYear]);
							}}>
							View All
						</button>
					</li>
				</ul>
			);
		}
		return '';
	};

	//Render blog post title links for side bar navigation
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

	//Render year links for side bar navigation
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
			sort: { fields: frontmatter___date, order: DESC }
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
			sort: { fields: frontmatter___date, order: DESC }
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
