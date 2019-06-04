import React from 'react'
import {connect} from "react-redux";

import RequestList from './../../components/requests/RequestList'

import {
	DEFAULT_URL
} from "../../constants/defaultConstants";

import {
	fetchPolynomList
} from "../../actions/sendRequest";

class RequestListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchData(`${DEFAULT_URL}polynoms`);
	}

	render() {
		return (
			<RequestList
				listData={this.props.data}
			/>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.allRequestsIsLoading,

});

const mapDispatchToProps = dispatch => ({
	fetchData: (url) => dispatch(fetchPolynomList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestListContainer);