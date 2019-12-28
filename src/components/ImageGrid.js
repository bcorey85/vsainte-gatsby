import React, { useState } from 'react';
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
				<input
					type='image'
					src={subImg1}
					alt=''
					onMouseEnter={() => swapImgHover(subImg1)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg1)}
					onKeyDown={() => swapImgClick(subImg1)}
					className='image-grid__img lazyload'
				/>
				<input
					type='image'
					src={subImg2}
					alt=''
					onMouseEnter={() => swapImgHover(subImg2)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg2)}
					onKeyDown={() => swapImgClick(subImg2)}
					className='image-grid__img lazyload'
				/>
				<input
					type='image'
					src={subImg3}
					alt=''
					onMouseEnter={() => swapImgHover(subImg3)}
					onMouseLeave={() => swapImgHover(mainImg)}
					onClick={() => swapImgClick(subImg3)}
					onKeyDown={() => swapImgClick(subImg3)}
					className='image-grid__img lazyload'
				/>
			</div>
			<div className='image-grid__main-image'>
				<img
					src={focusedImg}
					alt=''
					className='image-grid__img lazyload'
				/>
			</div>
		</div>
	);
};

export default ImageGrid;
