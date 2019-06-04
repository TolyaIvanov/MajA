import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	LOAD_REQUEST_OF_POLYNOM,
	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED,
} from "../../constants/defaultConstants";

export const fetchPolynomList = (state = [], {data, type}) => {
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

export const fetchPolynom = (state = [], {data, type}) => {
	switch (type) {
		case LOAD_REQUEST_OF_POLYNOM :
			return {
				...state,
				data
			};
		default:
			return state;
	}
};

export const fetchPolynomIsLoading = (state = false, {isLoading, type}) => {
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

export const fetchPolynomIsAccepted = (state = false, {isAccepted, type}) => {
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
