const createBlogObject = arr => {
	//Pull all years and filter out duplicate values, sort desc
	const blogYears = Array.from(
		new Set(
			arr.map(post => {
				return post.node.fields.year;
			})
		)
	).sort((a, b) => b - a);

	//Sort blog posts into array by year
	const sortedBlogData = blogYears.map(year => {
		const posts = arr.filter(post => {
			if (post.node.fields.year === year) {
				return post;
			}
			return null;
		});
		return { year, posts };
	});

	//Convert array to obj
	const toObject = arr => {
		var obj = {};
		for (let i = 0; i < arr.length; i++) {
			obj[arr[i].year] = arr[i].year;
			obj[arr[i].year] = arr[i].posts;
		}
		return obj;
	};

	return toObject(sortedBlogData);
};

export default createBlogObject;
