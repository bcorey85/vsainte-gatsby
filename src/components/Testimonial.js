import React from 'react';

import './Testimonial.css';

const Testimonial = props => {
	const { body, name, title, location } = props;
	return (
		<div className='testimonial'>
			<div className='testimonial__quote'>“</div>
			<div className='testimonial__body'>{body}</div>
			<div className='testimonial__meta'>
				<div>
					<div className='testimonial__author'>{name}</div>
					<div>{title}</div>
					<div>{location}</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
