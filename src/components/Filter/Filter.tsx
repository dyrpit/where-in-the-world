import { FC } from 'react';
import { UpdateFilter, UpdateInput } from '../../hooks/useSearch';

import FilterBy from '../FilterBy/FilterBy';
import SearchInput from '../SearchInput/SearchInput';

import { StyledFilterWrapper } from './Filter.styles';

interface IProps {
	handleInputChange: UpdateInput;
	handleFilterChange: UpdateFilter;
}

const Filter: FC<IProps> = ({ handleInputChange, handleFilterChange }) => {
	return (
		<StyledFilterWrapper>
			<SearchInput handleInputChange={handleInputChange} />
			<FilterBy handleFilterChange={handleFilterChange} />
		</StyledFilterWrapper>
	);
};

export default Filter;
