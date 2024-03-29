import React from 'react';

import MainNav from './MainNav';

import hero from '../../images/header-hero.png';
import './MobileMenu.css';

const MobileMenu = props => {
	const { menuOpen, toggleMobileNav } = props;
	return (
		<div className='mobile-menu'>
			<div
				className={`mobile-menu__icon ${menuOpen ? 'icon-fixed' : ''}`}
				onClick={toggleMobileNav}
				onKeyDown={toggleMobileNav}
				role='button'
				aria-label='mobile navigation'
				tabIndex={0}>
				<span />
				<span />
				<span />
			</div>
			<div
				className={`mobile-menu__links ${menuOpen ? 'menu-open' : ''}`}>
				<img
					src={hero}
					alt='Just Like A Hero logo'
					className='header__hero--mobile'
				/>
				<MainNav
					color='var(--black)'
					location='mobile'
					onClick={toggleMobileNav}
					onKeyDown={toggleMobileNav}
				/>
			</div>
		</div>
	);
};

export default MobileMenu;
