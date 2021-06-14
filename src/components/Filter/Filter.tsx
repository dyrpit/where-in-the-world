import { Dispatch, FC, SetStateAction, useState } from 'react';

import FilterBy from '../FilterBy/FilterBy';
import SearchInput from '../SearchInput/SearchInput';

import { StyledFilterWrapper } from './Filter.styles';

type UpdateType = Dispatch<SetStateAction<never[]>>;

interface IProps {
	countries: [];
	setSearchResults: UpdateType;
}

const Filter: FC<IProps> = ({ countries, setSearchResults }) => {
	const [search, setSearch] = useState<string>('');
	const [filteredBy, setFilteredBy] = useState<never[]>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;

		console.log('filteredby', filteredBy);

		setSearch(value);
		const searchResult = filteredBy.filter((country: any) =>
			country.name.toLowerCase().includes(search.toLowerCase())
		);

		console.log(searchResult);
	};

	const handleSearchBtnClick = () => {
		const searchResult = filteredBy.filter((country: any) =>
			country.name.toLowerCase().includes(search.toLowerCase())
		);

		console.log(searchResult);
		setSearchResults(searchResult);
	};

	const handleFilterByClick = (region: string): void => {
		// setFilterBy(region.toLowerCase());
		const filterByResult = countries.filter((country: any) =>
			country.region.toLowerCase().includes(region.toLowerCase())
		);

		console.log(filterByResult);
		setFilteredBy(filterByResult);
		setSearchResults(filterByResult);
	};

	console.log(search);
	// console.log(filterBy);

	return (
		<StyledFilterWrapper>
			<SearchInput onChange={handleInputChange} value={search} onClick={handleSearchBtnClick} />
			<FilterBy onClick={handleFilterByClick} />
		</StyledFilterWrapper>
	);
};

export default Filter;
