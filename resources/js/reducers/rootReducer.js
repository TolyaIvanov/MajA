import {combineReducers} from "redux";

import {
	fetchPalindromeList,
	allRequestsIsLoading,
	fetchPalindrome,
	fetchPalindromeIsAccepted,
	fetchPalindromeIsLoading
} from "./requests/requstList";

import {
	inputChanging
} from "./input/value";

export default combineReducers({
	fetchPalindromeList,
	allRequestsIsLoading,
	fetchPalindrome,
	fetchPalindromeIsAccepted,
	fetchPalindromeIsLoading,
	inputChanging
});





