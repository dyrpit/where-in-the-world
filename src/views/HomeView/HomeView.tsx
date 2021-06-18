import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { useSearch } from '../../hooks/useSearch';

import CountryItem from '../../components/CountryItem/CountryItem';
import Filter from '../../components/Filter/Filter';

//TODO3: move fetching to separate hook?

interface ICurrency {
	name: string;
	symbol: string;
}

interface ILanguage {
	name: string;
	nativeName: string;
}
export interface ICountry {
	name: string;
	flag: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	nativName: string;
	topLevelDomain: string[];
	currencies: ICurrency[];
	languages: ILanguage[];
	borders: string[];
}

export type CountryData = ICountry[] | [];

const HomeView: FC = () => {
	const [countries, setCountries] = useState<CountryData>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const { filteredCountries, handleInputChange, handleFilterChange } = useSearch(countries);

	useEffect(() => {
		const fetchCities = async () => {
			setIsLoading(true);

			try {
				const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

				if (data) {
					setCountries(data);
					setIsLoading(false);
					setError('');
				}
			} catch (e) {
				setIsLoading(false);
				setError(e.message);
			}
		};

		fetchCities();
	}, []);

	//TODO2: Add pagination, display only 8 countries at start

	return (
		<div>
			<Filter handleInputChange={handleInputChange} handleFilterChange={handleFilterChange} />
			{error && <p>{error}</p>}
			{!isLoading && (
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
					{filteredCountries.map((country: ICountry) => (
						<CountryItem country={country} key={country.name} />
					))}
				</div>
			)}
		</div>
	);
};

export default HomeView;
