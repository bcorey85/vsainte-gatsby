import React from 'react';

import './PageContainer.css';

const PageContainer = props => {
	return <div className='page-container'>{props.children}</div>;
};

export default PageContainer;
