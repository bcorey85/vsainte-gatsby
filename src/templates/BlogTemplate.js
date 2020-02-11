import React from 'react';
import { graphql } from 'gatsby';

import Section from '../components/shared/Section';
import BlogPostList from '../components/BlogPostList';
import BlogNavigation from '../components/BlogNavigation';
import SEO from '../components/Seo';
import '../pages/blog.css';

const BlogTemplate = ({ data }) => {
	const { markdownRemark } = data;
	return (
		<React.Fragment>
			<SEO title='Blog' />
			<Section>
				<div className='blog'>
					<h1 className='page-title'>Blog</h1>
					<div className='blog-content'>
						<div className='blog-content__left'>
							<BlogPostList selectedPosts={markdownRemark} />
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

export default BlogTemplate;

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(fields: { path: { eq: $path } }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM, Do YYYY")
				image_desc
				image {
					childImageSharp {
						fluid(maxWidth: 630) {
							...GatsbyImageSharpFluid
						}
					}
				}
				link
				link_text
				title
				type
				video
			}
		}
	}
`;
