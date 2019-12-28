import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';

import './Button.css';

const Button = props => {
	const {
		to,
		href,
		type,
		color,
		width,
		padding,
		margin,
		borderRadius
	} = props;

	const colors = {
		default: 'var(--primary-dark)',
		cta: 'var(--red)'
	};

	const widths = {
		default: 'auto',
		full: '100%'
	};

	const paddings = {
		default: '1.2rem 4.8rem',
		tight: '.8rem 1.6rem'
	};

	const margins = {
		default: '0 1.6rem',
		left: '0 0 0 1.6rem',
		right: '0 1.6rem 0 0',
		none: '0'
	};

	if (href) {
		return (
			<a
				href={href}
				className='btn'
				style={{
					backgroundColor: `${colors[color]}`,
					width: `${widths[width]}`,
					padding: `${paddings[padding]}`,
					margin: `${margins[margin]}`,
					borderRadius: borderRadius
				}}>
				{props.children}
			</a>
		);
	}

	if (type) {
		return (
			<button
				className='btn'
				style={{
					backgroundColor: `${colors[color]}`,
					width: `${widths[width]}`,
					padding: `${paddings[padding]}`,
					margin: `${margins[margin]}`,
					borderRadius: borderRadius
				}}>
				{props.children}
			</button>
		);
	}

	return (
		<Link
			to={to}
			className='btn'
			style={{
				backgroundColor: `${colors[color]}`,
				width: `${widths[width]}`,
				padding: `${paddings[padding]}`,
				margin: `${margins[margin]}`,
				borderRadius: borderRadius
			}}>
			{props.children}
		</Link>
	);
};

export default Button;
