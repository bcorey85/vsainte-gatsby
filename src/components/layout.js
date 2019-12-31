/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './Footer';
import PageContainer from './PageContainer';
import Transition from './Transition';

import './Header.css';
import './Footer.css';
import './layout.css';

const Layout = ({ children, location }) => {
	return (
		<div className='site'>
			<Header />
			<PageContainer>
				<Transition location={location}>{children}</Transition>
			</PageContainer>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
