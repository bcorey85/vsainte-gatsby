import React, { useState } from 'react';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import MobileMenu from './MobileMenu';
import Divider from '../shared/Divider';

import logo from '../../images/logo-svg.svg';
import hero from '../../images/header-hero.png';
import './Header.css';

const Header = () => {
	const [ menuOpen, setMenuOpen ] = useState(false);

	const toggleMobileNav = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className='header'>
			<div className='header__container'>
				<Link to='/'>
					<img
						src={logo}
						alt='Vladimir Sainte logo'
						className='header__logo'
					/>
				</Link>
				<div className='header__nav-container'>
					<MainNav color='var(--black)' location='header' />
				</div>
				<img
					src={hero}
					alt='Just Like A Hero logo'
					className='header__hero'
				/>
				<div className='mobile-nav'>
					<MobileMenu
						toggleMobileNav={toggleMobileNav}
						menuOpen={menuOpen}
					/>
				</div>
			</div>
			<Divider />
		</header>
	);
};

export default Header;
