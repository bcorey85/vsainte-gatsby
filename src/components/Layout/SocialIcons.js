import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './SocialIcons.css';

const SocialIcon = props => {
	return (
		<div className='social-icon-container'>
			<Link to='/contact' aria-label='contact'>
				<div className='social-icon'>
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
			</Link>
			<a
				href='https://www.facebook.com/justlikeahero'
				aria-label='facebook'>
				<div className='social-icon'>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</div>
			</a>
			<a href='https://www.instagram.com/Vla1899/' aria-label='instagram'>
				<div className='social-icon'>
					<FontAwesomeIcon icon={faInstagram} />
				</div>
			</a>
		</div>
	);
};

export default SocialIcon;
