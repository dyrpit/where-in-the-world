import { FC } from 'react';
import { UpdateFilter, UpdateInput } from '../../hooks/useSearch';

import FilterBy from '../FilterBy/FilterBy';
import SearchInput from '../SearchInput/SearchInput';

import { StyledFilterWrapper } from './Filter.styles';

interface IProps {
	handleInputChange: UpdateInput;
	handleFilterChange: UpdateFilter;
	handleResetInput: () => void;
}

const Filter: FC<IProps> = ({ handleInputChange, handleFilterChange, handleResetInput }) => {
	return (
		<StyledFilterWrapper>
			<SearchInput handleInputChange={handleInputChange} handleResetInput={handleResetInput} />
			<FilterBy handleFilterChange={handleFilterChange} />
		</StyledFilterWrapper>
	);
};

export default Filter;
