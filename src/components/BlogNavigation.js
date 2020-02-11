import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import useBlogState from '../hooks/useBlogState';

const BlogNavigation = () => {
	const blogData = useStaticQuery(blogNavQuery);
	const blogArray = blogData.allMarkdownRemark.edges;

	const {
		blogObject,
		selectedYear,
		setSelectedYear,
		selectedPosts,
		setSelectedPosts
	} = useBlogState(blogArray);

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
			<Link to={post.node.fields.path} className='link'>
				{ReactHtmlParser(post.node.frontmatter.title)}
			</Link>
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
		</React.Fragment>
	);
};

export default BlogNavigation;

const blogNavQuery = graphql`
	query BlogNav {
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "blog-post" } } }
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
					fields {
						path
						year
					}
				}
			}
		}
	}
`;
