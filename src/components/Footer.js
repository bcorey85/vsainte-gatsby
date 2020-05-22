import React from 'react';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import Divider from '../components/shared/Divider';
import SocialIcons from './SocialIcons';
import logo from '../images/logo-gray-svg.svg';
import bclogo from '../images/bc-logo-svg.svg';

import './Footer.css';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='footer'>
				<Divider />
				<div className='footer-container'>
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

						<div className='footer__bc'>
							<a
								href='mailto:bcorey85@gmail.com'
								className='footer__link'>
								<img
									className='footer__bc-svg'
									src={bclogo}
									alt='BC Dev Co.'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
