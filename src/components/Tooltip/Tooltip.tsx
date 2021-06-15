import { FC } from 'react';
import { UpdateFilter } from '../../hooks/useSearch';

import { StyledTooltipList, StyledTooltipItem } from './Tooltip.styles';

interface IProps {
	isOpen: boolean;
	handleFilterChange: UpdateFilter;
	toggleTooltipOpen: () => void;
}

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Tooltip: FC<IProps> = ({ isOpen, handleFilterChange, toggleTooltipOpen }) => {
	return (
		<StyledTooltipList isOpen={isOpen}>
			{regions.map((region) => (
				<StyledTooltipItem
					key={region}
					onClick={() => {
						handleFilterChange(region);
						toggleTooltipOpen();
					}}
				>
					{region}
				</StyledTooltipItem>
			))}
		</StyledTooltipList>
	);
};

export default Tooltip;
