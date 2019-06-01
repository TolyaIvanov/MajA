import React from 'react'

class Input extends React.Component{
	render() {
		return (
			<div className={'polynom-input-wrapper'}>
				<input
					type="text"
					className={'input'}
					required={'required'}
				/>
			</div>
		);
	}
}

export default Input;
