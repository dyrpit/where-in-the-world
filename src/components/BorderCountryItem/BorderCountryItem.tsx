import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import ErrorFallback from '../ErrorFallback/ErrorFallback';
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
        const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${border}`);

        if (data) {
          setBorderCountry(data[0].name.common);
          setIsLoading(false);
          setError('');
        }
      } catch (e) {
        setIsLoading(false);
        if (e instanceof Error) {
          setError(e.message);
        }
        setError('Could not get data');
      }
    };

    fetchBorderCountry();
  }, [border]);

  return (
    <>
      {error ? (
        <ErrorFallback errorMsg={error} />
      ) : isLoading ? (
        <Spinner isLoading={isLoading} size={40} />
      ) : (
        <StyledBorderCountry to={borderCountry || '#'}>{country}</StyledBorderCountry>
      )}
    </>
  );
};

export default BorderCountryItem;
