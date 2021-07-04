import { FC } from 'react';

import { useSearch } from '../../hooks/useSearch';
import { FetchType, ICountry } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';

import CountryItem from '../../components/CountryItem/CountryItem';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import Filter from '../../components/Filter/Filter';
import PaginationControl from '../../components/PaginationControl/PaginationControl';
import Spinner from '../../components/Spinner/Spinner';

import { StyledCountriesDisplayWrapper } from './HomeView.styles';

const HomeView: FC<FetchType> = ({ data, isLoading, error }) => {
	const { filteredCountries, handleInputChange, handleFilterChange, handleResetInput } = useSearch(
		data,
		300
	);

	const { itemsPerPage, currentPage, pages, handleNextPage, handlePrevPage, handleItemsPerPage } =
		usePagination(filteredCountries.length);

	return (
		<>
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

			{error ? (
				<ErrorFallback errorMsg={error} />
			) : isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				<StyledCountriesDisplayWrapper>
					{filteredCountries
						.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)
						.map((country: ICountry) => (
							<CountryItem country={country} key={country.name} />
						))}
				</StyledCountriesDisplayWrapper>
			)}
		</>
	);
};

export default HomeView;
