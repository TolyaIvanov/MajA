import React from 'react';
import {Provider} from 'react-redux'

import Form from './form/Form'
import RequestList from './requests/RequestList'

import store from './../store';

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className={'container'}>
					<Form/>
					<RequestList/>
				</div>
			</Provider>
		);
	}
}

export default Main;