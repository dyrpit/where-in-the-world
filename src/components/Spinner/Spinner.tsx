import { FC } from 'react';
import { useTheme } from 'styled-components';

import { PuffLoader } from 'react-spinners';

import { StyledWrapper, StyledSpinnerWrapper, StyledSpinnerText } from './Spinner.styles';

interface IProps {
	isLoading: boolean;
	size?: number;
}

const Spinner: FC<IProps> = ({ isLoading, size = 160 }) => {
	const theme = useTheme();

	return (
		<StyledWrapper>
			<StyledSpinnerWrapper size={size}>
				<PuffLoader loading={isLoading} color={theme.color.text} size={size} />
			</StyledSpinnerWrapper>
			<StyledSpinnerText>Loading...</StyledSpinnerText>
		</StyledWrapper>
	);
};

export default Spinner;
