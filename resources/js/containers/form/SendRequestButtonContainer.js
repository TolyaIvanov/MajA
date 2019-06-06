import React from 'react'
import {connect} from "react-redux";

import SendRequestButton from './../../components/form/SendRequestButton'

import {
	fetchOnePalindrome
} from "../../actions/sendRequest";

class SendRequestButtonContainer extends React.Component {
	render() {
		return (
			<SendRequestButton
				isLoading={this.props.requestData}
				sendPalindrome={this.props.fetchNewPalindrome}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	requestData: state.fetchPalindromeIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchNewPalindrome: (url) => dispatch(fetchOnePalindrome(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestButtonContainer);