import React from 'react';

import Header from './Header';
import Footer from './Footer';
import PageContainer from './PageContainer';
import Transition from './Transition';
import { BlogContextProvider } from '../../contexts/BlogContext';

import './Layout.css';

const Layout = ({ children, location }) => {
	return (
		<BlogContextProvider>
			<div className='site'>
				<Header />
				<PageContainer>
					<Transition location={location}>{children}</Transition>
				</PageContainer>
				<Footer />
			</div>
		</BlogContextProvider>
	);
};

export default Layout;
