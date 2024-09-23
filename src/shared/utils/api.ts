import axios from 'axios';

export const getAllCities = async () => {
	const { data } = await axios.get(
		'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?languageCode=en&countryIds=Q159&limit=10&minPopulation=50000',
		{
			headers: {
				'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
				'x-rapidapi-key': import.meta.env.VITE_GEO_DB_KEY,
			},
		}
	);

	return data;
};
