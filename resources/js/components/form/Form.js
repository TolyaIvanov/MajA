import React from 'react';

import SendRequestButtonContainer from './../../containers/form/SendRequestButtonContainer';
import InputContainer from './../../containers/form/InputContainer';

class Form extends React.Component {
	render() {
		return (
			<form name={'palindrome_field'} className={'form'}>
				<InputContainer/>
				<SendRequestButtonContainer/>
			</form>
		);
	}
}

export default Form;