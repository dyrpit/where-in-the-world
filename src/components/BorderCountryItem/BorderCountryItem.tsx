import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';

import { StyledBorderCountry } from './BorderCountryItem.styles';

interface IProps {
	border: string;
}

const BorderCountryItem: FC<IProps> = ({ border }) => {
	const [borderCountry, setBorderCountry] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const country = borderCountry ? borderCountry : 'No border country';

	useEffect(() => {
		const fetchBorderCountry = async () => {
			setIsLoading(true);

			try {
				const { data } = await axios.get(
					`https://restcountries.eu/rest/v2/alpha/${border}?fields=name`
				);

				if (data) {
					setBorderCountry(data.name);
					setIsLoading(false);
					setError('');
				}
			} catch (e) {
				setIsLoading(false);
				setError(e.message);
			}
		};

		fetchBorderCountry();
	}, [border]);

	return (
		<>
			{isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				<StyledBorderCountry to={borderCountry || '#'}>{country}</StyledBorderCountry>
			)}
		</>
	);
};

export default BorderCountryItem;
