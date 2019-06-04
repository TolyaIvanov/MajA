import React from 'react'
import {connect} from "react-redux";

import SendRequestButton from './../../components/form/SendRequestButton'

import {
	fetchOnePolynom
} from "../../actions/sendRequest";

class SendRequestButtonContainer extends React.Component {
	render() {
		return (
			<SendRequestButton
				isLoading={this.props.requestData}
				sendPolynom={this.props.fetchNewPolynom}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	requestData: state.fetchPolynomIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchNewPolynom: (url) => dispatch(fetchOnePolynom(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestButtonContainer);