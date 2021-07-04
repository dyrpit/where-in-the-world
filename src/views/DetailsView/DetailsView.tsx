import { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { DETAILS_URL, useFetch } from '../../hooks/useFetch';

import Button from '../../components/Button/Button';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import Spinner from '../../components/Spinner/Spinner';

interface IParams {
	name: string;
}

const DetailsView: FC = () => {
	const { name } = useParams<IParams>();

	const history = useHistory();

	const URL = `${DETAILS_URL}${name}`;

	const {
		data: [country],
		isLoading,
		error,
	} = useFetch(URL);

	const handleGoBack = (): void => history.push('/');

	return (
		<>
			<Button handleGoBack={handleGoBack} title='Back' />
			{error}
			{isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				country && <CountryDetails country={country} />
			)}
		</>
	);
};

export default DetailsView;
