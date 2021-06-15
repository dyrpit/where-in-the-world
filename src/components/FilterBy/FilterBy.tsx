import { FC, useState } from 'react';
import { UpdateFilter } from '../../hooks/useSearch';

import Tooltip from '../Tooltip/Tooltip';

import { StyledFilterByWrapper, StyledFilterByBtn, StyledBtnText } from './FilterBy.styles';

interface IProps {
	handleFilterChange: UpdateFilter;
}

const FilterBy: FC<IProps> = ({ handleFilterChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleTooltipOpen = (): void => {
		setIsOpen((prev) => !prev);
	};

	const btnIcon = isOpen ? (
		<i className='fas fa-angle-up'></i>
	) : (
		<i className='fas fa-angle-down'></i>
	);

	//TODO4: change name of btn Text while filtering, add also ability to remove filter
	return (
		<StyledFilterByWrapper>
			<StyledFilterByBtn onClick={toggleTooltipOpen}>
				<StyledBtnText>Filter by Region</StyledBtnText>
				{btnIcon}
			</StyledFilterByBtn>
			<Tooltip
				isOpen={isOpen}
				handleFilterChange={handleFilterChange}
				toggleTooltipOpen={toggleTooltipOpen}
			/>
		</StyledFilterByWrapper>
	);
};

export default FilterBy;
