import {combineReducers} from "redux";

import {
	fetchPolynomList,
	allRequestsIsLoading,
	fetchPolynom,
	fetchPolynomIsAccepted,
	fetchPolynomIsLoading
} from "./requests/requstList";

import {
	inputChanging
} from "./input/value";

export default combineReducers({
	fetchPolynomList,
	allRequestsIsLoading,
	fetchPolynom,
	fetchPolynomIsAccepted,
	fetchPolynomIsLoading,
	inputChanging
});





