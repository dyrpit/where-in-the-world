import { FC, useState } from 'react';

import Tooltip from '../Tooltip/Tooltip';

import { StyledFilterByWrapper, StyledFilterByBtn, StyledBtnText } from './FilterBy.styles';

interface IProps {
	onClick: (region: string) => void;
}

const FilterBy: FC<IProps> = ({ onClick }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleTooltipOpen = (): void => {
		setIsOpen((prev) => !prev);
	};

	return (
		<StyledFilterByWrapper>
			<StyledFilterByBtn onClick={toggleTooltipOpen}>
				<StyledBtnText>Filter by Region</StyledBtnText>
				<i className='fas fa-angle-down'></i>
			</StyledFilterByBtn>
			<Tooltip isOpen={isOpen} onClick={onClick} />
		</StyledFilterByWrapper>
	);
};

export default FilterBy;
