import React from 'react';
import 'lazysizes';

import Image from '../components/shared/Image';

import './BlogPost.css';

const BlogPost = props => {
	const { src, alt, title, date, body, link, linkTxt, mediaType } = props;
	console.log(src);

	const linkMarkup = (
		<div className='blog-post__link'>
			<a href={link} className='link-caps'>
				{linkTxt}
			</a>
		</div>
	);

	if (mediaType === 'video') {
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
							className='lazyload'
							alt={alt}
						/>
					</div>
					<div>{body}</div>
					{link ? linkMarkup : ''}
				</div>
			</article>
		);
	}

	return (
		<article className='blog-post'>
			<div className='blog-post__content'>
				<h5>{date}</h5>
				<h3>{title}</h3>
				<div className='blog-post__img'>
					<Image
						fluid={src}
						alt={alt}
						boxShadow='default'
						style={{ height: '100%', maxHeight: '32rem' }}
					/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: body }} />
				{link ? linkMarkup : ''}
			</div>
		</article>
	);
};

export default BlogPost;
