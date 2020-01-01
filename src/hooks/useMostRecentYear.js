import { useState } from 'react';

function useMostRecentYear(obj) {
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
}

export default useMostRecentYear;
