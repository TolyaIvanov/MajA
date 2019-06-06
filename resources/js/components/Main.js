import React from 'react';
import {Provider} from 'react-redux'

import Form from './form/Form'
import RequestListContainer from '../containers/requests/RequestListContainer';

import store from './../store';

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className={'container'}>
					<Form/>
					<RequestListContainer/>
				</div>
			</Provider>
		);
	}
}

export default Main;