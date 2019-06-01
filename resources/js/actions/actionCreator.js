import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	LOAD_REQUEST_OF_POLYNOM,
	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED
} from "../constants/defaultConstants";

										// all requests
export const fetchPolynomListSuccess = data => ({
	type : LOAD_ALL_REQUESTS,
	data,
});

export const allRequestsIsLoading = isLoading => ({
	type : ALL_REQUESTS_IS_LOADING,
	isLoading
});

										//work with 1 request
export const fetchPolynom = data => ({
	type : LOAD_REQUEST_OF_POLYNOM,
	data,
});

export const fetchPolynomIsLoading = isLoading => ({
	type : REQUEST_IS_LOADING,
	isLoading
});

export const fetchPolynomIsAccepted= isAccepted => ({
	type : REQUEST_IS_ACCPETED,
	isAccepted
});
