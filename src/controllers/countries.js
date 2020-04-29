import api from '../config/api';
import { request } from '../helpers/request';

export const getContriesByCountryName = (name) => {
  return request({
    method: api.methods.get,
    url: api.endPoints.countries.byName(name),
  });
};

export const getContriesByCountryCode = (countryCode) => {
  return request({
    method: api.methods.get,
    url: api.endPoints.countries.byCountryCode(countryCode),
  });
};

export const getContriesByCountryCurrency = (countryCurrency) => {
  return request({
    method: api.methods.get,
    url: api.endPoints.countries.byCountryCurrency(countryCurrency),
  });
};

export default {
	getContriesByCountryName,
	getContriesByCountryCode,
	getContriesByCountryCurrency,
};
