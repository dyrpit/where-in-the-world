import { FC, useState } from 'react';
import { UpdateFilter } from '../../hooks/useSearch';

import Tooltip from '../Tooltip/Tooltip';

import { StyledFilterByWrapper, StyledFilterByBtn, StyledBtnText } from './FilterBy.styles';

interface IProps {
	handleFilterChange: UpdateFilter;
}

const FilterBy: FC<IProps> = ({ handleFilterChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentRegion, setCurrentRegion] = useState<string>('');

	const toggleTooltipOpen = (): void => {
		setIsOpen((prev) => !prev);
	};

	const btnIcon = isOpen ? (
		<i className='fas fa-angle-up'></i>
	) : (
		<i className='fas fa-angle-down'></i>
	);

	return (
		<StyledFilterByWrapper>
			<StyledFilterByBtn onClick={toggleTooltipOpen}>
				<StyledBtnText>{currentRegion || 'Filter by Region'}</StyledBtnText>
				{btnIcon}
			</StyledFilterByBtn>
			<Tooltip
				isOpen={isOpen}
				handleFilterChange={handleFilterChange}
				toggleTooltipOpen={toggleTooltipOpen}
				currentRegion={currentRegion}
				setCurrentRegion={setCurrentRegion}
			/>
		</StyledFilterByWrapper>
	);
};

export default FilterBy;
