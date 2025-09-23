import React from 'react';
import parse from 'html-react-parser';

import Button from '../shared/Button';
import ImageGrid from './ImageGrid';

import './BookDetails.css';

const BookDetails = props => {
	const {
		subImg1,
		subImg2,
		subImg3,
		mainImg,
		date,
		title,
		desc,
		href
	} = props;

	return (
		<div className='book-details'>
			<div className='book-details__images'>
				<ImageGrid
					subImg1={subImg1}
					subImg2={subImg2}
					subImg3={subImg3}
					mainImg={mainImg}
				/>
			</div>
			<div className='book-details__content'>
				<div>
					<h5>{date}</h5>
					<h2>{title}</h2>
					{parse(desc)}
					<div className='book-details__buy'>
						<Button href={href}>Buy Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
