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
			<div className='input-group'>
				<textarea
					className='textarea'
					style={invert ? { ...invertStyles } : null}
					name={name}
					id={id}
					placeholder=' '
				/>
				<label htmlFor={placeholder}>{placeholder}</label>
			</div>
		);
	}
	return (
		<div className='input-group'>
			<input
				type={type}
				className='input'
				style={invert ? { ...invertStyles } : null}
				name={name}
				id={id}
				placeholder=' '
			/>
			<label htmlFor={placeholder}>{placeholder}</label>
		</div>
	);
};

export default Input;
