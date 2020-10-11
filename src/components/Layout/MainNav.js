import React from 'react';
import { Link } from 'gatsby';

import './MainNav.css';

const MainNav = props => {
	const { location, color, onClick, onKeyDown } = props;

	return (
		<nav
			className={`main-nav main-nav--${location}`}
			style={{ color: color }}>
			{props.children}
			<ul>
				<li>
					<Link
						to='/'
						className='main-nav__link'
						activeClassName={`${location}Active`} //different active states in header & footer
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/books'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Books
					</Link>
				</li>
				<li>
					<Link
						to='/merch'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Merch
					</Link>
				</li>
				<li>
					<Link
						to='/speaking'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Speaking
					</Link>
				</li>
				<li>
					<Link
						to='/about'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						About
					</Link>
				</li>
				<li>
					<Link
						to='/blog'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Blog
					</Link>
				</li>
				<li>
					<Link
						to='/contact'
						className='main-nav__link'
						activeClassName={`${location}Active`}
						onClick={onClick}
						onKeyDown={onKeyDown}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
