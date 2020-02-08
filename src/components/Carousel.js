import React, { useState } from 'react';
import {
	faChevronLeft,
	faChevronRight,
	faThumbsUp,
	faCamera
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Testimonial from './Testimonial';
import Image from './shared/Image';

import './Carousel.css';

config.autoAddCss = false;
const Carousel = props => {
	const { title, icon, data, dataType } = props;

	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ currentItem, setCurrentItem ] = useState(data[currentIndex]);
	const icons = {
		thumbsup: faThumbsUp,
		camera: faCamera
	};

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
						name={currentItem.name}
						title={currentItem.title}
						title2={currentItem.title2}
						body={currentItem.body}
					/>
				</React.Fragment>
			);
		} else if (dataType === 'photos') {
			return (
				<React.Fragment>
					<div className='carousel__photo'>
						<Image
							src={currentItem.src}
							alt={currentItem.alt}
							boxShadow='default'
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
				<FontAwesomeIcon
					icon={icons[icon]}
					className='carousel__banner-icon'
				/>
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
