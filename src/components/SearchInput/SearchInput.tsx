import { FC, useState } from 'react';
import { UpdateInput } from '../../hooks/useSearch';

import { StyledFilterBtn, StyledFilterInput, StyledSearchInputWrapper } from './SearchInput.styles';

interface IProps {
	handleInputChange: UpdateInput;
}

const SearchInput: FC<IProps> = ({ handleInputChange }) => {
	const [value, setValue] = useState<string>('');

	return (
		<StyledSearchInputWrapper>
			{/* //TODO6: remove button */}
			<StyledFilterBtn>
				<i className='fas fa-search'></i>
			</StyledFilterBtn>
			<StyledFilterInput
				type='text'
				onChange={(e) => {
					//TODO5: send down from hook value or leave it like it is?
					const { value } = e.target;

					setValue(value);
					handleInputChange(e);
				}}
				value={value}
				placeholder='Search for a country...'
			/>
		</StyledSearchInputWrapper>
	);
};

export default SearchInput;
