import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';
import { ICountry } from '../../hooks/useFetch';

import {
  StyledItemWrapper,
  StyledItemContent,
  StyleItemImg,
  StyledItemField,
  StyledItemFieldName,
  StyledItemTitle,
} from './CountryItem.styles';
interface IProps {
  country: ICountry;
}

const CountryItem: FC<IProps> = ({ country }) => {
  return (
    <Link to={`details/${country.name.common.toLowerCase()}`}>
      <StyledItemWrapper>
        <StyleItemImg src={country.flags.png} alt='' />
        <StyledItemContent>
          <StyledItemTitle>{country.name.common}</StyledItemTitle>
          <StyledItemField>
            <StyledItemFieldName>Population: </StyledItemFieldName>
            {getPopulationNumberWithComas(country.population)}
          </StyledItemField>
          <StyledItemField>
            <StyledItemFieldName>Region: </StyledItemFieldName>
            {country.region}
          </StyledItemField>
          <StyledItemField>
            <StyledItemFieldName>Capital: </StyledItemFieldName>
            {country.capital}
          </StyledItemField>
        </StyledItemContent>
      </StyledItemWrapper>
    </Link>
  );
};

export default CountryItem;
