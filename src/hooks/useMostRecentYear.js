import { useState } from 'react';

const useMostRecentYear = obj => {
	const years = Object.keys(obj);
	const recentYear = years
		.filter(year => {
			return obj[year].length > 0 ? year : '';
		})
		.reduce((acc, cur) => {
			return cur > acc ? cur : acc;
		});
	const [ mostRecentYear, setMostRecentYear ] = useState(recentYear);
	return [ mostRecentYear, setMostRecentYear ];
};

export default useMostRecentYear;
