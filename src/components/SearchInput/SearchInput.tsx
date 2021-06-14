import { FC } from 'react';

import { StyledFilterBtn, StyledFilterInput, StyledSearchInputWrapper } from './SearchInput.styles';

interface IProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
	value: string;
}

const SearchInput: FC<IProps> = ({ onChange, value, onClick }) => {
	return (
		<StyledSearchInputWrapper>
			<StyledFilterBtn onClick={onClick}>
				<i className='fas fa-search'></i>
			</StyledFilterBtn>
			<StyledFilterInput
				type='text'
				onChange={onChange}
				value={value}
				placeholder='Search for a country...'
			/>
		</StyledSearchInputWrapper>
	);
};

export default SearchInput;
