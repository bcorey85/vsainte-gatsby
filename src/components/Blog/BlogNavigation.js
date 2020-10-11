import React, { useContext } from 'react';
import { Link } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import { BlogContext } from '../../contexts/BlogContext';

import './BlogNavigation.css';

const BlogNavigation = () => {
	const {
		blogObject,
		selectedYear,
		setSelectedYear,
		selectedPosts,
		setSelectedPosts
	} = useContext(BlogContext);

	const viewAll = () => {
		const allRendered =
			selectedPosts.length >= 1 &&
			blogObject[selectedYear].length === selectedPosts.length;

		if (!allRendered) {
			return (
				<ul>
					<li>
						<Link
							onClick={() => {
								setSelectedPosts(blogObject[selectedYear]);
							}}
							to='/blog'>
							View All {selectedYear} Posts
						</Link>
					</li>
				</ul>
			);
		}
		return '';
	};

	//Render blog post title links for side bar navigation
	const postTitleLinks = blogObject[selectedYear].map((post, index) => (
		<li key={post.id}>
			<Link
				to={post.fields.path}
				onClick={() => {
					setSelectedPosts(blogObject[selectedYear][index]);
				}}
				className='link'>
				{ReactHtmlParser(post.frontmatter.title)}
			</Link>
		</li>
	));

	//Render year links for side bar navigation
	const yearsLinks = Object.keys(blogObject)
		.sort((a, b) => b - a)
		.map(year => (
			<li key={year}>
				<Link
					to='/blog'
					className='link'
					onClick={() => {
						setSelectedPosts(blogObject[year]);
						setSelectedYear(year);
					}}>
					{year}
				</Link>
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
