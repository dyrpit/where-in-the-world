import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';

import CountryItem from '../../components/CountryItem/CountryItem';
import Filter from '../../components/Filter/Filter';
import PaginationControl from '../../components/PaginationControl/PaginationControl';

import { StyledCountriesDisplayWrapper } from './HomeView.styles';

//TODO3: move fetching to separate hook?

export interface ICurrency {
	name: string;
	symbol: string;
}

export interface ILanguage {
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

	const { filteredCountries, handleInputChange, handleFilterChange, handleResetInput } = useSearch(
		countries,
		300
	);

	const { itemsPerPage, currentPage, pages, handleNextPage, handlePrevPage, handleItemsPerPage } =
		usePagination(filteredCountries.length);

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

	return (
		<div>
			<Filter
				handleInputChange={handleInputChange}
				handleFilterChange={handleFilterChange}
				handleResetInput={handleResetInput}
			/>

			<PaginationControl
				currentPage={currentPage}
				handleItemsPerPage={handleItemsPerPage}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				itemsPerPage={itemsPerPage}
				pages={pages}
			/>

			{error && <p>{error}</p>}

			{!isLoading && (
				<StyledCountriesDisplayWrapper>
					{filteredCountries
						.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)
						.map((country: ICountry) => (
							<CountryItem country={country} key={country.name} />
						))}
				</StyledCountriesDisplayWrapper>
			)}
		</div>
	);
};

export default HomeView;
