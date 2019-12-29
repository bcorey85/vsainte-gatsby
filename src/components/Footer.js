import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import SocialIcons from './SocialIcons';
// import Button from './shared/Button';
// import Input from './shared/Input';
import Divider from './shared/Divider';
import logo from '../images/logo-gray-svg.svg';

import './Footer.css';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='footer'>
				<Divider />
				<div className='footer-container'>
					{/* <div className='sign-up'>
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
					</div> */}
					<div className='footer__logo-container'>
						<Link to='/'>
							<img
								src={logo}
								alt='Vladimir Sainte logo'
								className='footer__logo'
							/>
						</Link>
						<div className='footer__copyright'>
							© Copyright {new Date().getFullYear()}
						</div>
						<div className='footer__social-icons'>
							<SocialIcons />
						</div>
					</div>
					<div className='footer__nav'>
						<MainNav location='footer' />

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
