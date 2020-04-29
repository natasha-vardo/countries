import ActionTypes from './types';

const initialState = {
  loading: false,
  loaded: false,
  isError: false,
  countriesData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case ActionTypes.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
				countriesData: action.payload,
				isError: false,
        loading: false,
        loaded: true,
      };

    case ActionTypes.LOAD_COUNTRIES_FAILURE:
      return {
        ...state,
				isError: true,
        loading: false,
        loaded: false,
			};

    default:
      return state;
  }
};

export default reducer;
