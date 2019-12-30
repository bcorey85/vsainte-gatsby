import React from 'react';

import './Divider.css';

const Divider = ({ angle }) => {
	return <div className={`divider${angle ? '--angle' : ''}`} />;
};

export default Divider;
