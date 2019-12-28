import React from 'react';

import './Input.css';

const Input = props => {
	const { type, placeholder, name, id, invert } = props;

	const invertStyles = {
		color: 'var(--gray-light)',
		border: '.1rem solid var(--gray-light)'
	};

	if (type === 'textarea') {
		return (
			<textarea
				placeholder={placeholder}
				className='textarea'
				style={invert ? { ...invertStyles } : null}
				name={name}
				id={id}
			/>
		);
	}
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='input'
			style={invert ? { ...invertStyles } : null}
			name={name}
			id={id}
		/>
	);
};

export default Input;
