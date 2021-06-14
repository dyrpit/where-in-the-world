import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import CountryItem from '../../components/CountryItem/CountryItem';
import Filter from '../../components/Filter/Filter';

const HomeView: FC = () => {
	const [countries, setCountries] = useState<[]>([]);
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchCities = async () => {
			setIsLoading(true);

			try {
				const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

				if (data) {
					setCountries(data);
					setSearchResults(data);
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
			<Filter countries={countries} setSearchResults={setSearchResults} />
			{error && <p>{error}</p>}
			{!isLoading && (
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
					{searchResults.map((country: any) => (
						<CountryItem country={country} key={country.name}>
							{country.name}
						</CountryItem>
					))}
				</div>
			)}
		</div>
	);
};

export default HomeView;
