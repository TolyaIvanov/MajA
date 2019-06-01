import React from 'react';

import SendRequestButtonContainer from './../../containers/form/SendRequestButtonContainer';
import Input from './Input';

class Form extends React.Component {
	render() {
		return (
			<form name={'polynom_field'} className={'form'}>
				<Input/>
				<SendRequestButtonContainer/>
			</form>
		);
	}
}

export default Form;