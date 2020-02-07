import React from 'react';
import Image from 'gatsby-image';

import './Thumbnail.css';

const Thumbnail = props => {
	const { src, fluid, fixed, alt } = props;
	console.log(props);
	return (
		<div className='thumbnail'>
			{fluid && (
				<Image fluid={fluid} alt={alt} className='thumbnail__img' />
			)}
			{fixed && (
				<Image fixed={fixed} alt={alt} className='thumbnail__img' />
			)}
			{src && <img src={src} alt={alt} className='thumbnail__img' />}
		</div>
	);
};

export default Thumbnail;
