import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	LOAD_REQUEST_OF_PALINDROME,
	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED
} from "../constants/defaultConstants";

// all requests
export const fetchPalindromeListSuccess = data => ({
	type: LOAD_ALL_REQUESTS,
	data,
});

export const allRequestsIsLoading = isLoading => ({
	type: ALL_REQUESTS_IS_LOADING,
	isLoading
});

										//work with 1 request
export const fetchPalindrome = data => ({
	type : LOAD_REQUEST_OF_PALINDROME,
	data,
});

export const fetchPalindromeIsLoading = isLoading => ({
	type: REQUEST_IS_LOADING,
	isLoading
});

export const fetchPalindromeIsAccepted = isAccepted => ({
	type: REQUEST_IS_ACCPETED,
	isAccepted
});
