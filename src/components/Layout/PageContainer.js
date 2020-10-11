import React from 'react';

import './PageContainer.css';

const PageContainer = props => {
	return <main className='page-container'>{props.children}</main>;
};

export default PageContainer;
