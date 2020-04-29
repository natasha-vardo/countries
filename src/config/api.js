export default {
	url: process.env.REACT_APP_API_ENTRYPOINT,
	methods: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    del: 'DELETE',
	},
	
	endPoints: {
		countries: {
			byName: (name) => `name/${name}`,
			byCountryCode: (countryCode) => `alpha/${countryCode}`,
			byCountryCurrency: (countryCurrency) => `currency/${countryCurrency}`,
		},
	},
};
