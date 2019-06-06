import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	LOAD_REQUEST_OF_PALINDROME,
	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED,
} from "../../constants/defaultConstants";

export const fetchPalindromeList = (state = [], {data, type}) => {
	switch (type) {
		case LOAD_ALL_REQUESTS :
			return {
				...state,
				data
			};
		default:
			return state;
	}
};

export const allRequestsIsLoading = (state = false, {isLoading, type}) => {
	switch (type) {
		case ALL_REQUESTS_IS_LOADING :
			return {
				...state,
				isLoading
			};
		default:
			return state;
	}
};

export const fetchPalindrome = (state = [], {data, type}) => {
	switch (type) {
		case LOAD_REQUEST_OF_PALINDROME :
			return {
				...state,
				data
			};
		default:
			return state;
	}
};

export const fetchPalindromeIsLoading = (state = false, {isLoading, type}) => {
	switch (type) {
		case REQUEST_IS_LOADING :
			return {
				...state,
				isLoading
			};
		default:
			return state;
	}
};

export const fetchPalindromeIsAccepted = (state = false, {isAccepted, type}) => {
	switch (type) {
		case REQUEST_IS_ACCPETED :
			return {
				...state,
				isAccepted
			};
		default:
			return state;
	}
};
