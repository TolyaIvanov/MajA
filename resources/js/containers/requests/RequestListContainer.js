import React from 'react'
import {connect} from "react-redux";

import RequestList from './../../components/requests/RequestList'
import ListItem from './../../components/requests/ListItem'

import {
	DEFAULT_URL
} from "../../constants/defaultConstants";

import {
	fetchPalindromeList
} from "../../actions/sendRequest";

class RequestListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchData(`${DEFAULT_URL}palindromes`);
	}

	renderRequestList = () => {
		return this.props.data.map((listItem) => (
			<ListItem
				id={listItem.id}
				value={listItem.value}
				palindromes={listItem.palindromes}
			/>
		));
	};

	render() {
		return (
			<RequestList
				list={this.props.data && this.renderRequestList()}
			/>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.allRequestsIsLoading,
	data: state.fetchPalindromeList.data,
});

const mapDispatchToProps = dispatch => ({
	fetchData: (url) => dispatch(fetchPalindromeList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestListContainer);