import React, { createContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createBlogObject } from '../utils/createBlogObject';

import useMostRecentYear from '../hooks/useMostRecentYear';

export const BlogContext = createContext();

const blogQuery = graphql`
	query BlogData {
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

export const BlogContextProvider = props => {
	const blogData = useStaticQuery(blogQuery);
	const blogArray = blogData.allMarkdownRemark.edges;

	//Sort blog posts into obj by year
	const blogObject = createBlogObject(blogArray);

	//Avoid new year empty blog post bug
	const [ mostRecentYear ] = useMostRecentYear(blogObject);

	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogObject[mostRecentYear]
	);

	return (
		<BlogContext.Provider
			value={{
				blogObject,
				selectedYear,
				setSelectedYear,
				selectedPosts,
				setSelectedPosts
			}}>
			{props.children}
		</BlogContext.Provider>
	);
};
