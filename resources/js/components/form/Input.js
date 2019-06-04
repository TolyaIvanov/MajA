import React from 'react'

class Input extends React.Component{
	render() {
		return (
			<div className={'polynom-input-wrapper'}>
				<input
					type="text"
					className={'input'}
					required={'required'}
					placeholder={'Введите строку'}
					value={this.props.val}
					onChange={this.props.change}
				/>
			</div>
		);
	}
}

export default Input;
