import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { useSearch } from '../../hooks/useSearch';

import CountryItem from '../../components/CountryItem/CountryItem';
import Filter from '../../components/Filter/Filter';
import { usePagination } from '../../hooks/usePagination';

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
		usePagination(filteredCountries);

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
	//do zmiany current page bo przy pierwszej stronie ma być 0

	console.log('start slice', (currentPage - 1) * itemsPerPage);
	console.log('end slice', itemsPerPage * currentPage);

	console.log(
		filteredCountries.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)
	);

	return (
		<div>
			<Filter
				handleInputChange={handleInputChange}
				handleFilterChange={handleFilterChange}
				handleResetInput={handleResetInput}
			/>
			{error && <p>{error}</p>}
			<div className='pagination'>
				<div>
					<p>{itemsPerPage}</p>
					<div>
						<div onClick={() => handleItemsPerPage(10)}>10</div>
						<div onClick={() => handleItemsPerPage(20)}>20</div>
						<div onClick={() => handleItemsPerPage(30)}>30</div>
						<div onClick={() => handleItemsPerPage(50)}>50</div>
					</div>
				</div>
				<div>
					<p onClick={handlePrevPage}>{'<'}</p>
					<p>{currentPage > 1 ? '1' : currentPage}</p>
					<p>{currentPage > 1 && currentPage < pages ? `...${currentPage}...` : null}</p>
					<p>{pages}</p>
					<p onClick={handleNextPage}>{'>'}</p>
				</div>
			</div>

			{!isLoading && (
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
					{filteredCountries
						.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)
						.map((country: ICountry) => (
							<CountryItem country={country} key={country.name} />
						))}
				</div>
			)}
		</div>
	);
};

export default HomeView;
