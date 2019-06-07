import {
	fetchPalindrome,
	fetchPalindromeIsLoading,
	fetchPalindromeIsAccepted,

	fetchPalindromeListSuccess,
	allRequestsIsLoading,
} from "./actionCreator";

import {
	inputChanging
} from "./input/actionsCreator";

import store from './../store';

export const fetchPalindromeList = (url) => {
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
			.then(data => dispatch(fetchPalindromeListSuccess(data)));
	}
};

export const fetchOnePalindrome = (url) => {
	return dispatch => {
		const input = {
			value: store.getState().inputChanging
		};

		input.value = input.value.trim();
		event.preventDefault();

		if (input.value.length >= 1) {
			dispatch(fetchPalindromeIsLoading(true));

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

					dispatch(fetchPalindromeIsLoading(false));
					dispatch(fetchAccepted());

					return response;
				})
				.then(response => response.json())
				.then(data => dispatch(fetchPalindrome(data)));
		}
	}
};


export const fetchAccepted = () => {
	return dispatch => {
		dispatch(fetchPalindromeIsAccepted(true));

		setTimeout(() => {
			dispatch(fetchPalindromeIsAccepted(false));
		}, 3000)
	}
};
