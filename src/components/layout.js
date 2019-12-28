/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import './Header.css';
import './Footer.css';
import './Layout.css';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			{children}
			<Footer />
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
