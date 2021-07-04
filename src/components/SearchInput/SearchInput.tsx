import { FC, useState } from 'react';

import { UpdateInput } from '../../hooks/useSearch';

import { StyledFilterBtn, StyledFilterInput, StyledSearchInputWrapper } from './SearchInput.styles';

interface IProps {
	handleInputChange: UpdateInput;
	handleResetInput: () => void;
}

const SearchInput: FC<IProps> = ({ handleInputChange, handleResetInput }) => {
	const [value, setValue] = useState<string>('');

	const searchIcon = value ? <i className='fas fa-times'></i> : <i className='fas fa-search'></i>;

	const handleReset = () => {
		if (value) {
			handleResetInput();
			setValue('');
		}
	};

	return (
		<StyledSearchInputWrapper>
			<StyledFilterBtn onClick={handleReset} aria-label='Search button'>
				{searchIcon}
			</StyledFilterBtn>
			<StyledFilterInput
				type='text'
				onChange={(e) => {
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
