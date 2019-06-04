import {
	fetchPolynom,
	fetchPolynomIsLoading,
	fetchPolynomIsAccepted,

	fetchPolynomListSuccess,
	allRequestsIsLoading,
} from "./actionCreator";

import store from './../store';

export const fetchPolynomList = (url) => {
	return dispatch => {
		dispatch(allRequestsIsLoading(true));

		fetch(url)
			.then((response => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(allRequestsIsLoading(false));

				return response;
			}))
			.then(response => response.json())
			.then(data => dispatch(fetchPolynomListSuccess(data)));
	}
};

export const fetchOnePolynom = (url) => {
	return dispatch => {
		const input = {
			value: store.getState().inputChanging
		};

		event.preventDefault();
		dispatch(fetchPolynomIsLoading(true));

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(input.value ? input : ''),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(fetchPolynomIsLoading(false));
				dispatch(fetchAccepted());

				return response;
			})
			.then(response => response.json())
			.then(data => dispatch(fetchPolynom(data)));
	}
};


export const fetchAccepted = () => {
	return dispatch => {
		dispatch(fetchPolynomIsAccepted(true));

		setTimeout(() => {
			dispatch(fetchPolynomIsAccepted(false));
		}, 3000)
	}
};
