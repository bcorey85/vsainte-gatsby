import React from 'react';
import GatsbyImage from 'gatsby-image';
import 'lazysizes';

import './Image.css';

const Image = props => {
	const { src, alt, className, boxShadow, borderRadius, style } = props;
	const shadows = {
		default: '0px 4px 14px rgba(0, 0, 0, 0.25)',
		thick:
			'0px 8px 30px rgba(0, 0, 0, 0.25), 0px 4px 14px rgba(0, 0, 0, 0.25)'
	};

	if (props.fixed) {
		return (
			<GatsbyImage
				fixed={props.fixed}
				alt={alt}
				className={`img lazyload ${className ? className : ''}`}
				style={{
					...style,
					boxShadow: shadows[boxShadow],
					borderRadius: borderRadius
				}}
			/>
		);
	}

	if (props.fluid) {
		return (
			<GatsbyImage
				fluid={props.fluid}
				alt={alt}
				className={`img lazyload ${className ? className : ''}`}
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
			className={`img lazyload ${className ? className : ''}`}
			style={{
				boxShadow: shadows[boxShadow],
				borderRadius: borderRadius
			}}
		/>
	);
};

export default Image;
