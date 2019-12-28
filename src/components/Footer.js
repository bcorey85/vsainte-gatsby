import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import SocialIcons from './SocialIcons';
import Button from './shared/Button';
import Input from './shared/Input';
import Divider from './shared/Divider';

import './Footer.css';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='footer'>
				<Divider />
				<div className='footer-container'>
					<div className='sign-up'>
						<div className='sign-up__container'>
							<div className='sign-up__text-group'>
								<div>
									Want to know when my next book is ready?
								</div>
								<Input
									type='email'
									placeholder='yourname@email.com'
									invert
								/>
							</div>
							<div className='sign-up__btn'>
								<Button
									to='/'
									width='small'
									padding='tight'
									margin='left'>
									Sign Up
								</Button>
							</div>
						</div>
					</div>
					<div className='footer-links'>
						<div className='footer__nav'>
							<MainNav location='footer' />
						</div>
						<SocialIcons />
						<Link to='/' className='footer__link'>
							© {new Date().getFullYear()} www.vladimirsainte.com
						</Link>

						<a
							href='mailto:bcorey85@gmail.com'
							className='footer__link'>
							Website by Brandon Corey
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
