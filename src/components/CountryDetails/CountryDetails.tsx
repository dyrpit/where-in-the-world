import { FC } from 'react';

import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';
import { ICountry } from '../../hooks/useFetch';

import BorderCountryItem from '../BorderCountryItem/BorderCountryItem';
import CountryDetailsField from '../CountryDetailsField/CountryDetailsField';

import {
  StyledBorderCountryWrapper,
  StyledDetailsWrapper,
  StyledImgWrapper,
  StyledImg,
  StyledCountryDetails,
  StyledCountryDetailsSection,
  StyledCountryName,
  StyledTitle,
} from './CountryDetails.styles';

import { StyledBorderCountry } from '../BorderCountryItem/BorderCountryItem.styles';

interface IProps {
  country: ICountry;
}

const CountryDetails: FC<IProps> = ({ country }) => {
  return (
    <StyledDetailsWrapper>
      <StyledImgWrapper>
        <StyledImg src={country?.flags.png} alt={`${country.name.common} flag`} />
      </StyledImgWrapper>
      <StyledCountryDetails>
        <StyledCountryName>{country.name.common}</StyledCountryName>
        <StyledCountryDetailsSection>
          <CountryDetailsField fieldName='Native name:' fieldValue={country.name.common} />
          <CountryDetailsField
            fieldName='Population:'
            fieldValue={getPopulationNumberWithComas(country.population)}
          />
          <CountryDetailsField fieldName='Region:' fieldValue={country.region} />
          <CountryDetailsField fieldName='Sub Region:' fieldValue={country.subregion} />
          <CountryDetailsField fieldName='Capital:' fieldValue={country.capital} />
        </StyledCountryDetailsSection>
        <StyledCountryDetailsSection>
          <CountryDetailsField fieldName='Top Level Domain:' fieldValue={country.tld} />
          <CountryDetailsField fieldName='Currencies:' fieldValue={country.currencies} />
          <CountryDetailsField fieldName='Languages:' fieldValue={country.languages} />
        </StyledCountryDetailsSection>
        <div>
          <StyledTitle>Border Countries:</StyledTitle>
          <StyledBorderCountryWrapper>
            {country.borders.length ? (
              <>
                {country.borders.map((border) => (
                  <BorderCountryItem key={border} border={border} />
                ))}
              </>
            ) : (
              <StyledBorderCountry to='#'>No border countries</StyledBorderCountry>
            )}
          </StyledBorderCountryWrapper>
        </div>
      </StyledCountryDetails>
    </StyledDetailsWrapper>
  );
};

export default CountryDetails;
