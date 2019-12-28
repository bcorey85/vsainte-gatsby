import React from 'react';

import Button from './shared/Button';
import Image from './shared/Image';

import './Card.css';

const Card = props => {
	const { href, to, imgSrc, imgAlt, btnText, btnColor, boxShadow } = props;

	const shadows = {
		default: '0px 4px 14px rgba(0, 0, 0, 0.25)',
		thick:
			'0px 8px 30px rgba(0, 0, 0, 0.25), 0px 4px 14px rgba(0, 0, 0, 0.25)'
	};

	return (
		<div className='card' style={{ boxShadow: shadows[boxShadow] }}>
			<Image src={imgSrc} alt={imgAlt} borderRadius='0' />
			<Button
				href={href}
				to={to}
				color={btnColor}
				borderRadius='0'
				width='full'
				margin='none'>
				{btnText}
			</Button>
		</div>
	);
};

export default Card;
