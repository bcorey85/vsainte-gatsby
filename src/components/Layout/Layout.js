import React from 'react';

import Header from './Header';
import Footer from './Footer';
import PageContainer from './PageContainer';

import './Layout.css';

const Layout = ({ children }) => {
	return (
		<div className='site'>
			<Header />
			<PageContainer>
				{children}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Layout;
