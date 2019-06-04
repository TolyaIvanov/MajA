import {
	INPUT_CHANGES
} from "../../constants/defaultConstants";

export const inputChanging = (state = '', {value, type}) => {
	switch (type) {
		case INPUT_CHANGES :
			return value;
		default:
			return state;
	}
};


