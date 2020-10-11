import React from 'react';
import { Link } from 'gatsby';
import 'lazysizes';

import Image from '../shared/Image';

import './BlogPost.css';

const BlogPost = props => {
	const { src, alt, title, date, body, link, linkTxt, mediaType } = props;
	const setLinkMarkup = link => {
		//Check if http
		if (link.substring(0, 4) === 'http') {
			return (
				<div className='blog-post__link'>
					<a href={link} className='link-caps'>
						{linkTxt}
					</a>
				</div>
			);
		} else {
			return (
				<div className='blog-post__link'>
					<Link to={link} className='link-caps'>
						{linkTxt}
					</Link>
				</div>
			);
		}
	};

	let linkMarkup;
	if (link) {
		linkMarkup = setLinkMarkup(link);
	}

	if (mediaType === 'video') {
		return (
			<article className='blog-post'>
				<div className='blog-post__content'>
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
					<h5>{date}</h5>
					<h4>{title}</h4>
					<div dangerouslySetInnerHTML={{ __html: body }} />
					{linkMarkup}
				</div>
			</article>
		);
	} else if (mediaType === 'image') {
		return (
			<article className='blog-post'>
				<div className='blog-post__content'>
					<div className='blog-post__img'>
						<Image fluid={src} alt={alt} boxShadow='default' />
					</div>
					<h5>{date}</h5>
					<h4>{title}</h4>
					<div dangerouslySetInnerHTML={{ __html: body }} />
					{linkMarkup}
				</div>
			</article>
		);
	} else {
		return (
			<article className='blog-post'>
				<div className='blog-post__content'>
					<h5>{date}</h5>
					<h4>{title}</h4>
					<div dangerouslySetInnerHTML={{ __html: body }} />
					{linkMarkup}
				</div>
			</article>
		);
	}
};

export default BlogPost;
