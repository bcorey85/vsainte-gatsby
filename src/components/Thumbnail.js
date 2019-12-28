import React from 'react';

import './Thumbnail.css';

const Thumbnail = props => {
	const { src, alt } = props;
	return (
		<div className='thumbnail'>
			<img src={src} alt={alt} className='thumbnail__img' />
		</div>
	);
};

export default Thumbnail;
