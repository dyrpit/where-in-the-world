import { FC } from 'react';

import { StyledErrorFallbackWrapper, StyledErrorFallbackHighlight } from './ErrorFallback.styles';

interface IProps {
	errorMsg: string;
}

const ErrorFallback: FC<IProps> = ({ errorMsg }) => {
	return (
		<StyledErrorFallbackWrapper>
			<p>
				<StyledErrorFallbackHighlight>Ups an error occured: </StyledErrorFallbackHighlight>
				{errorMsg}
			</p>
		</StyledErrorFallbackWrapper>
	);
};

export default ErrorFallback;
