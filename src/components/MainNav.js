import React from 'react';

// import { NavLink } from 'react-router-dom';

import { Link } from 'gatsby';

import './MainNav.css';

const MainNav = props => {
	const { location, color } = props;

	return (
		<nav className={`main-nav ${location}`} style={{ color: color }}>
			{props.children}
			<ul>
				<li>
					<Link
						to='/'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/books'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						Books
					</Link>
				</li>
				<li>
					<Link
						to='/speaking'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						Speaking
					</Link>
				</li>
				<li>
					<Link
						to='/about'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						About
					</Link>
				</li>
				<li>
					<Link
						to='/blog'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						Blog
					</Link>
				</li>
				<li>
					<Link
						to='/contact'
						className='main-nav__link'
						activeClassName={`${location}Active`}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
