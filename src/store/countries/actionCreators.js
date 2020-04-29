import ActionTypes from './types';

export const loadCountriesRequest = () => {
	return {
		type: ActionTypes.LOAD_COUNTRIES_REQUEST,
	}
};

export const loadCountriesSuccess = (countries) => {
	return {
		type: ActionTypes.LOAD_COUNTRIES_SUCCESS,
		payload: countries,
	}
};

export const loadCountriesFailure = (error) => {
	return {
		type: ActionTypes.LOAD_COUNTRIES_FAILURE,
		payload: error,
	}
};
