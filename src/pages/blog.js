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
		2020: blogData.year2,
		2019: blogData.year1
	};
	const [ mostRecentYear ] = useMostRecentYear(blogJSON.posts);
	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogJSON.posts[mostRecentYear]
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
		if (Array.isArray(data)) {
			return data.map(post => {
				return (
					<BlogPost
						key={post.title}
						date={post.date}
						title={ReactHtmlParser(post.title)}
						mediaType={post.mediaType}
						src={post.mediaSrc}
						alt={post.alt}
						body={ReactHtmlParser(post.body)}
						link={post.link}
						linkTxt={post.linkTxt}
					/>
				);
			});
		}
		return (
			<BlogPost
				key={data.title}
				date={data.date}
				title={ReactHtmlParser(data.title)}
				mediaType={data.mediaType}
				src={data.mediaSrc}
				body={ReactHtmlParser(data.body)}
				link={data.link}
				linkTxt={data.linkTxt}
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

	const postTitleLinks = blogJSON.posts[selectedYear].map(post => (
		<li key={post.title}>
			<button
				className='link'
				onClick={() => setSelectedPosts(filterByTitle(post.title))}>
				{ReactHtmlParser(post.title)}
			</button>
		</li>
	));

	const yearsLinks = Object.keys(blogJSON.posts)
		.sort((a, b) => b - a)
		.map(year => (
			<li key={year}>
				<button
					className='link'
					onClick={() => {
						setSelectedPosts(blogJSON.posts[year]);
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
				fileAbsolutePath: { regex: "/2020/g" }
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
				}
			}
		}
		year1: allMarkdownRemark(
			filter: {
				frontmatter: { type: { eq: "blog-post" } }
				fileAbsolutePath: { regex: "/2019/g" }
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
				}
			}
		}
	}
`;
