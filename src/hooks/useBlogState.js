import { useState } from 'react';
import useMostRecentYear from './useMostRecentYear';
import createBlogObject from '../utils/createBlogObject';

const useBlogState = blogArray => {
	//Sort blog posts into obj by year
	const blogObject = createBlogObject(blogArray);

	//Avoid new year empty blog post bug
	const [ mostRecentYear ] = useMostRecentYear(blogObject);

	const [ selectedYear, setSelectedYear ] = useState(mostRecentYear);
	const [ selectedPosts, setSelectedPosts ] = useState(
		blogObject[mostRecentYear]
	);

	return {
		blogObject,
		selectedYear,
		setSelectedYear,
		selectedPosts,
		setSelectedPosts
	};
};

export default useBlogState;
