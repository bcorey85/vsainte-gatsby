import React from 'react';

import Image from '../components/shared/Image';

import './BlogPost.css';

const BlogPost = props => {
	const { src, title, date, body, link, linkTxt, mediaType } = props;

	const linkMarkup = (
		<div className='blog-post__link'>
			<a href={link} className='link-caps'>
				{linkTxt}
			</a>
		</div>
	);

	if (mediaType.toLowerCase() === 'video') {
		return (
			<article className='blog-post'>
				<div className='blog-post__content'>
					<h5>{date}</h5>
					<h3>{title}</h3>
					<div className='blog-post__img'>
						<iframe
							title={title}
							width='100%'
							height='320px'
							src={src}
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
					<p>{body}</p>
					{link ? linkMarkup : ''}
				</div>
			</article>
		);
	}

	return (
		<div className='blog-post'>
			<div className='blog-post__content'>
				<h5>{date}</h5>
				<h3>{title}</h3>
				<div className='blog-post__img'>
					<Image src={src} boxShadow='default' />
				</div>
				<p>{body}</p>
				{link ? linkMarkup : ''}
			</div>
		</div>
	);
};

export default BlogPost;
