import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import useBlogState from '../hooks/useBlogState';
import Section from '../components/shared/Section';
import BlogPostList from '../components/BlogPostList';
import BlogNavigation from '../components/BlogNavigation';
import SEO from '../components/Seo';

import './blog.css';

const Blog = () => {
	const blogData = useStaticQuery(blogQuery);
	const blogArray = blogData.allMarkdownRemark.edges;
	const { selectedPosts } = useBlogState(blogArray);

	//Scroll to top of page on selectedPosts state change
	useScrollToTop(selectedPosts);

	return (
		<React.Fragment>
			<SEO title='Blog' />

			<Section>
				<div className='blog'>
					<h1 className='page-title'>Blog</h1>
					<div className='blog-content'>
						<div className='blog-content__left'>
							<BlogPostList selectedPosts={selectedPosts} />
						</div>
						<div className='blog-content__right'>
							<BlogNavigation />
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
