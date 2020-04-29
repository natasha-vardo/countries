import controllers from '../../controllers';
import config from '../../config';
import {
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure,
} from './actionCreators';

export const loadCountries = (type, data) => async (dispatch) => {
  dispatch(loadCountriesRequest());

  try {
		const loadedCountries = (type === config.inputsType.byCountryName)
		? await controllers.countries.getContriesByCountryName(data)
		: (type === config.inputsType.byCountryCode) ? await controllers.countries.getContriesByCountryCode(data)
		: await controllers.countries.getContriesByCountryCurrency(data);

		const countries = (!loadedCountries.length) ? [loadedCountries] : loadedCountries;
	
		dispatch(loadCountriesSuccess(countries));

  } catch (error) {
    dispatch(loadCountriesFailure(error));
  }
};
