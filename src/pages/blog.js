import React, { useContext } from 'react';

import useScrollToTop from '../hooks/useScrollToTop';

import Section from '../components/shared/Section';
import BlogPostList from '../components/BlogPostList';
import BlogNavigation from '../components/BlogNavigation';
import SEO from '../components/Seo';
import { BlogContext } from '../contexts/BlogContext';

import './blog.css';

const Blog = () => {
	const {
		blogObject,
		selectedYear,
		setSelectedYear,
		selectedPosts,
		setSelectedPosts
	} = useContext(BlogContext);
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
							<BlogNavigation
								setSelectedPosts={setSelectedPosts}
								setSelectedYear={setSelectedYear}
								selectedYear={selectedYear}
								blogObject={blogObject}
							/>
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default Blog;
