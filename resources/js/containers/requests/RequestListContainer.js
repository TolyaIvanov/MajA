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

import {
	inputChanging
} from "../../actions/input/actionsCreator";

class RequestListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchData(`${DEFAULT_URL}palindromes`);
	}

	render() {
		let newCard = null;

		if (this.props.newPalindrome) {
			newCard = <ListItem
				value={this.props.newPalindrome.value}
				palindromes={this.props.newPalindrome.palindromes}
			/>;
		}

		return (
			<RequestList>
				{newCard}
				{
					this.props.data && this.renderRequestList()
				}
			</RequestList>
		);
	}

	renderRequestList = () => {
		return this.props.data.map((listItem) => (
			<ListItem
				key={listItem.id}
				value={listItem.value}
				palindromes={listItem.palindromes}
			/>
		));
	};
}

const mapStateToProps = state => ({
	isLoading: state.allRequestsIsLoading,
	data: state.fetchPalindromeList.data,
	newPalindrome: state.fetchPalindrome.data,
});

const mapDispatchToProps = dispatch => ({
	fetchData: (url) => dispatch(fetchPalindromeList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestListContainer);