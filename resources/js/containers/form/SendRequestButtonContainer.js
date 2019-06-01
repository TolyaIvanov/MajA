import React from 'react'
import {connect} from "react-redux";

import SendRequestButton from './../../components/form/SendRequestButton'

import {
	fetchPolynomList
} from "../../actions/sendRequest";

class SendRequestButtonContainer extends React.Component {
	// componentDidMount() {
	//
	// }

	render() {
		let props = this.props;


		return (
			<SendRequestButton

			/>
		);
	}
}

const mapStateToProps = (state) => ({
	requestData: state.fetchPolynomList,
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: (url) =>dispatch(fetchPolynomList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestButtonContainer);