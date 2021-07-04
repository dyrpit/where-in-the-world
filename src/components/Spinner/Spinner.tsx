import { FC } from 'react';
import { useTheme } from 'styled-components';

import { PuffLoader } from 'react-spinners';

import { StyledSpinnerWrapper, StyledSpinnerText } from './Spinner.styles';

interface IProps {
	isLoading: boolean;
}

const Spinner: FC<IProps> = ({ isLoading }) => {
	const size = 160;

	const theme = useTheme();

	return (
		<>
			<StyledSpinnerWrapper size={size}>
				<PuffLoader loading={isLoading} color={theme.color.text} size={size} />
			</StyledSpinnerWrapper>
			<StyledSpinnerText>Loading...</StyledSpinnerText>
		</>
	);
};

export default Spinner;
