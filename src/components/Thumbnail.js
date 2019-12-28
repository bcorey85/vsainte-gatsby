import React from 'react';
import 'lazysizes';

import './Thumbnail.css';

const Thumbnail = props => {
	const { src, alt } = props;
	return (
		<div className='thumbnail'>
			<img src={src} alt={alt} className='thumbnail__img lazyload' />
		</div>
	);
};

export default Thumbnail;
