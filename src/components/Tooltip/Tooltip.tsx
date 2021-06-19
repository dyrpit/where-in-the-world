import { Dispatch, FC, SetStateAction } from 'react';
import { UpdateFilter } from '../../hooks/useSearch';

import { StyledTooltipList, StyledTooltipItem } from './Tooltip.styles';

interface IProps {
	isOpen: boolean;
	currentRegion: string;
	handleFilterChange: UpdateFilter;
	toggleTooltipOpen: () => void;
	setCurrentRegion: Dispatch<SetStateAction<string>>;
}

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Tooltip: FC<IProps> = ({
	currentRegion,
	isOpen,
	handleFilterChange,
	toggleTooltipOpen,
	setCurrentRegion,
}) => {
	const handleChangeRegion = (region?: string): void => {
		if (region) {
			handleFilterChange(region);
			setCurrentRegion(region);
		} else {
			handleFilterChange('');
			setCurrentRegion('');
		}

		toggleTooltipOpen();
	};

	return (
		<StyledTooltipList isOpen={isOpen}>
			{regions.map((region) => {
				if (region === currentRegion) return null;

				return (
					<StyledTooltipItem key={region} onClick={() => handleChangeRegion(region)}>
						{region}
					</StyledTooltipItem>
				);
			})}
			{currentRegion && (
				<StyledTooltipItem onClick={() => handleChangeRegion()}>Reset Filter</StyledTooltipItem>
			)}
		</StyledTooltipList>
	);
};

export default Tooltip;
