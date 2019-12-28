import React from 'react';

import './Section.css';

import lightGrayPaper from '../../images/light-gray-paper-bg.jpg';
import whitePaper from '../../images/white-paper-bg.jpg';
import mediumGrayPaper from '../../images/medium-gray-paper-bg.jpg';
import darkGrayPaper from '../../images/dark-gray-paper-bg.jpg';
import tealPaper from '../../images/teal-paper-bg.jpg';

const Section = props => {
	const { color, paper, className } = props;
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
			backgroundImage: `url(${textures[color]})`
		};
	} else {
		styles = {
			backgroundColor: colors[color]
		};
	}
	return (
		<section className={`section-outer ${className}`} style={styles}>
			<div className='section-inner'>{props.children}</div>
		</section>
	);
};

export default Section;
