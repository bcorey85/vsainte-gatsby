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
	const [ mostRecentYear ] = useMostRecentYear(blogJSON.posts);
	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogJSON.posts[mostRecentYear]
	);
	const blogData = useStaticQuery(blogQuery);
	const blogArray = blogData.allMarkdownRemark.edges;
	console.log(blogArray);

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

	const renderPosts = posts => {
		if (Array.isArray(posts)) {
			return posts.map(post => {
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
				key={posts.title}
				date={posts.date}
				title={ReactHtmlParser(posts.title)}
				mediaType={posts.mediaType}
				src={posts.mediaSrc}
				body={ReactHtmlParser(posts.body)}
				link={posts.link}
				linkTxt={posts.linkTxt}
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
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "blog-post" } } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					id
					frontmatter {
						image_desc
						image {
							childImageSharp {
								fluid(maxWidth: 630) {
									...GatsbyImageSharpFluid
								}
							}
						}
						date(formatString: "MMMM Do, YYYY")
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
