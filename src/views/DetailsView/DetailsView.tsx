import { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { ICountry } from '../HomeView/HomeView';
import Button from '../../components/Button/Button';
import CountryDetails from '../../components/CountryDetails/CountryDetails';

interface IParams {
	name: string;
}

const DetailsView: FC = () => {
	const [country, setCountry] = useState<ICountry | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const { name } = useParams<IParams>();

	const history = useHistory();

	const handleGoBack = (): void => history.push('/');

	useEffect(() => {
		const fetchCity = async () => {
			setIsLoading(true);

			try {
				const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

				if (data) {
					const country: ICountry = data[0];
					setCountry(country);
					setIsLoading(false);
					setError('');
				}
			} catch (e) {
				setIsLoading(false);
				setError(e.message);
			}
		};

		fetchCity();
	}, [name]);

	return (
		<div>
			<Button handleGoBack={handleGoBack} title='Back' />
			{error}
			{country && <CountryDetails country={country} />}
		</div>
	);
};

export default DetailsView;
