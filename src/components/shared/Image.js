import React from 'react';
import 'lazysizes';

import './Image.css';

const Image = props => {
	const { src, alt, className, boxShadow, borderRadius } = props;

	const shadows = {
		default: '0px 4px 14px rgba(0, 0, 0, 0.25)',
		thick:
			'0px 8px 30px rgba(0, 0, 0, 0.25), 0px 4px 14px rgba(0, 0, 0, 0.25)'
	};

	return (
		<img
			src={src}
			alt={alt}
			className={`img lazyload ${className ? className : ''}`}
			style={{
				boxShadow: shadows[boxShadow],
				borderRadius: borderRadius
			}}
		/>
	);
};

export default Image;
