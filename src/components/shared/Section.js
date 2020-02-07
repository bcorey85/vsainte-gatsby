import React from 'react';

import './Section.css';

import lightGrayPaper from '../../images/light-gray-paper-bg.jpg';
import whitePaper from '../../images/white-paper-bg.jpg';
import mediumGrayPaper from '../../images/medium-gray-paper-bg.jpg';
import darkGrayPaper from '../../images/dark-gray-paper-bg.jpg';
import tealPaper from '../../images/teal-paper-bg.jpg';

const Section = props => {
	const { color, paper, className, angle, padding, margin, wide } = props;
	const colors = {
		teal: 'var(--primary-light)',
		lightGray: 'var(--gray-light)',
		mediumGray: 'var(--gray-medium)',
		darkGray: 'var(--gray-medium)',
		white: 'var(--white)'
	};

	const textures = {
		teal: tealPaper,
		lightGray: lightGrayPaper,
		mediumGray: mediumGrayPaper,
		darkGray: darkGrayPaper,
		white: whitePaper
	};

	let styles;
	if (paper) {
		styles = {
			backgroundColor: colors[color],
			backgroundImage: `url(${textures[color]})`,
			padding,
			margin
		};
	} else {
		styles = {
			backgroundColor: colors[color],
			padding,
			margin
		};
	}
	return (
		<section
			className={`section-outer ${className ? className : ''} ${angle
				? `section--angle-${angle}`
				: ''}`}
			style={styles}>
			<div className={`section-inner ${wide && 'section-inner--wide'}`}>
				{props.children}
			</div>
		</section>
	);
};

export default Section;
