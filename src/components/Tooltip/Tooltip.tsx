import { FC } from 'react';

import { StyledTooltipList, StyledTooltipItem } from './Tooltip.styles';

interface IProps {
	isOpen: boolean;
	onClick: (region: string) => void;
}

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Tooltip: FC<IProps> = ({ isOpen, onClick }) => {
	return (
		<StyledTooltipList isOpen={isOpen}>
			{regions.map((region) => (
				<StyledTooltipItem key={region} onClick={() => onClick(region)}>
					{region}
				</StyledTooltipItem>
			))}
		</StyledTooltipList>
	);
};

export default Tooltip;
