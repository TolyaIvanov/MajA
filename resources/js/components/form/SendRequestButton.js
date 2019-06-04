import React from 'react'
import IconAdd from "../../SVGicons/IconAdd";

import {
	DEFAULT_URL
} from "../../constants/defaultConstants";

class SendRequestButton extends React.Component {
	render() {
		const url = `${DEFAULT_URL}create`;

		return (
			<div className={'send-button-wrapper'}>
				<button
					type={'submit'}
					className={'button'}
					onClick={() => {
						this.props.sendPolynom(url)
					}}
				>
					<IconAdd
						width={'32px'}
					/>
					<span className={'button-text'}>
					Отправить
				</span>
				</button>
			</div>
		);
	}
}

export default SendRequestButton;