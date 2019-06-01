import React from 'react'
import IconAdd from "../../SVGicons/IconAdd";

class SendRequestButton extends React.Component{
	render() {
		return (
			<div className={'send-button-wrapper'}>
				<button
					type={'submit'}
					className={'button'}
				>
				<IconAdd/>
				<span className={'button-text'}>
					Отправить
				</span>
				</button>
			</div>
		);
	}
}

export default SendRequestButton;