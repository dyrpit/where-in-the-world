import { FC } from 'react';

import { StyledButton } from './Button.styles';

interface IProps {
	handleGoBack: () => void;
	title: string;
}

const Button: FC<IProps> = ({ handleGoBack, title }) => {
	return (
		<StyledButton onClick={handleGoBack}>
			<i className='fas fa-arrow-left'></i>
			{title}
		</StyledButton>
	);
};

export default Button;
