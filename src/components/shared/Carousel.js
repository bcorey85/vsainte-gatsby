import React, { useState } from 'react';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import Testimonial from '../Landing/Testimonial';
import Image from './Image';

import './Carousel.css';

config.autoAddCss = false;
const Carousel = props => {
	const { title, data, dataType } = props;
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ currentItem, setCurrentItem ] = useState(data[currentIndex]);

	const incrementCarousel = (e, direction) => {
		e.stopPropagation();

		if (currentIndex < data.length - 1 && direction === 'inc') {
			setCurrentIndex(currentIndex + 1);
			setCurrentItem(data[currentIndex + 1]);
		} else if (currentIndex > 0 && direction === 'dec') {
			setCurrentIndex(currentIndex - 1);
			setCurrentItem(data[currentIndex - 1]);
		} else if (currentIndex === 0 && direction === 'dec') {
			setCurrentIndex(data.length - 1);
			setCurrentItem(data[data.length - 1]);
		} else {
			setCurrentIndex(0);
			setCurrentItem(data[0]);
		}
	};

	const renderContent = () => {
		if (dataType === 'text') {
			return (
				<React.Fragment>
					<Testimonial
						name={currentItem.frontmatter.author}
						title={currentItem.frontmatter.title1}
						title2={currentItem.frontmatter.title2}
						body={currentItem.html}
					/>
				</React.Fragment>
			);
		} else if (dataType === 'photos') {
			return (
				<React.Fragment>
					<div className='carousel__photo'>
						<Image
							image={
								currentItem.node.frontmatter.image
									.childImageSharp.gatsbyImageData
							}
							alt={currentItem.node.frontmatter.image_desc}
							boxShadow='default'
							style={{ height: '100%' }}
						/>
					</div>
				</React.Fragment>
			);
		}
	};

	const rightBtn = (
		<button
			className='carousel__icon'
			aria-label='right arrow'
			onClick={e => {
				incrementCarousel(e, 'inc');
			}}>
			<FontAwesomeIcon icon={faChevronRight} />
		</button>
	);

	const leftBtn = (
		<button
			className='carousel__icon'
			aria-label='left arrow'
			onClick={e => {
				incrementCarousel(e, 'dec');
			}}>
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
	);

	return (
		<div className='carousel'>
			<div className='carousel__banner'>
				<h3>{title}</h3>
			</div>

			<div className='carousel__content'>
				<div className='carousel__larrow'>
					{data.length > 1 ? leftBtn : ''}
				</div>
				<div className={`carousel__body-${dataType}`}>
					{renderContent()}
				</div>

				<div className='carousel__rarrow'>
					{data.length > 1 ? rightBtn : ''}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
