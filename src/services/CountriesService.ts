import { CountryData, ICountry } from '../views/HomeView/HomeView';

export default class CountriesService {
	static getCountriesByFilter(
		countries: CountryData,
		{ region, countryName }: { region: string; countryName: string }
	) {
		let result = countries;

		if (countryName && countryName.length) {
			const searchTerm = countryName.toLowerCase();

			result = result.filter((country: ICountry) =>
				country.name.toLowerCase().includes(searchTerm)
			);
		}

		if (region) {
			result = result.filter((country: ICountry) =>
				country.region.toLowerCase().includes(region.toLowerCase())
			);
		}

		return result;
	}
}
