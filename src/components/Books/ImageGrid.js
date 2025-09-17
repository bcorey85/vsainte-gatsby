import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'; 
import 'lazysizes';

import './ImageGrid.css';

const ImageGrid = props => {
	const { subImg1, subImg2, subImg3, mainImg } = props;

	const [ focusedImg, setFocusedImg ] = useState(mainImg);
	const [ swappedImg, setSwappedImg ] = useState(null);
	const [ imgTimer, setImgTimer ] = useState(null);

	const swapImgClick = img => {
		setFocusedImg(img);
		setSwappedImg(img);

		if (swappedImg !== img) {
			clearTimeout(imgTimer);
			let timeoutID = setTimeout(() => {
				setFocusedImg(mainImg);
			}, 5000);
			setImgTimer(timeoutID);
		}
	};

	const swapImgHover = img => {
		setFocusedImg(img);
	};

	return (
		<div className='image-grid'>
			<div className='image-grid__sub-images'>
				<div
					role='button'
					tabIndex={0}
					onMouseEnter={() => swapImgHover(subImg1)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg1)}
					onKeyDown={() => swapImgClick(subImg1)}>
					<GatsbyImage image={subImg1} alt='' className='image-grid__img' />
				</div>
				<div
					role='button'
					tabIndex={0}
					onMouseEnter={() => swapImgHover(subImg2)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg2)}
					onKeyDown={() => swapImgClick(subImg2)}>
					<GatsbyImage image={subImg2} alt='' className='image-grid__img' />
				</div>
				<div
					role='button'
					tabIndex={0}
					onMouseEnter={() => swapImgHover(subImg3)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg3)}
					onKeyDown={() => swapImgClick(subImg3)}>
					<GatsbyImage image={subImg3} alt='' className='image-grid__img' />
				</div>
			</div>
			<div className='image-grid__main-image'>
				<GatsbyImage image={focusedImg} alt='' className='image-grid__img' />
			</div>
		</div>
	);
};

export default ImageGrid;
