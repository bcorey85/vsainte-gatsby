import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'; 
import 'lazysizes';

import './Image.css';

const Image = props => {
	const { src, alt, className, boxShadow, borderRadius, style, image } = props;
	const shadows = {
		default: '0px 4px 14px rgba(0, 0, 0, 0.25)',
		thick:
			'0px 8px 30px rgba(0, 0, 0, 0.25), 0px 4px 14px rgba(0, 0, 0, 0.25)'
	};

	const imageData = getImage(image);

	if (imageData) {
		return (
			<GatsbyImage
				image={imageData}
				alt={alt}
				className={`img ${className ? className : ''}`}
				style={{
					...style,
					boxShadow: shadows[boxShadow],
					borderRadius: borderRadius
				}}
			/>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			className={`img  ${className ? className : ''}`}
			style={{
				boxShadow: shadows[boxShadow],
				borderRadius: borderRadius
			}}
		/>
	);
};

export default Image;
