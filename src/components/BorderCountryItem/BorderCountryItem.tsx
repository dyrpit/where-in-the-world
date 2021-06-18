import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { StyledBorderCountry } from './BorderCountryItem.styles';

const BorderCountry: FC = ({ children }) => {
	const [borderCountry, setBorderCountry] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const country = borderCountry ? borderCountry : 'No border country';

	//TODO: add error and loading handle
	useEffect(() => {
		const fetchBorderCountry = async () => {
			setIsLoading(true);

			try {
				const { data } = await axios.get(
					`https://restcountries.eu/rest/v2/alpha/${children}?fields=name`
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
	}, [children]);

	return <StyledBorderCountry>{country}</StyledBorderCountry>;
};

export default BorderCountry;
