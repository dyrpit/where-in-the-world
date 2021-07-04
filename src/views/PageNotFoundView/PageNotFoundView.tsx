import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import PirateFlag from '../../images/pirate.svg';

import Button from '../../components/Button/Button';

import {
	StyledPageNotFoundTitle,
	StyledPageNotFoundDescription,
	StyledPageNotFoundImg,
} from './PageNotFound.styles';

const PageNotFoundView: FC = () => {
	const history = useHistory();

	const goBack = () => {
		history.push('/');
	};

	return (
		<div>
			<StyledPageNotFoundTitle>Arrr!</StyledPageNotFoundTitle>
			<StyledPageNotFoundImg src={PirateFlag} alt='pirate flag' />
			<StyledPageNotFoundDescription>
				Look's like page you're looking for doesn't exist!
			</StyledPageNotFoundDescription>
			<Button handleGoBack={goBack} title='Go back' />
		</div>
	);
};

export default PageNotFoundView;
