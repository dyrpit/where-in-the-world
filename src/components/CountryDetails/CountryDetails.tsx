import { FC } from 'react';
import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';
import { ICountry } from '../../views/HomeView/HomeView';
import BorderCountry from '../BorderCountryItem/BorderCountryItem';

import {
	StyledBorderCountryWrapper,
	StyledDetailsWrapper,
	StyledImgWrapper,
	StyledImg,
	StyledCountryDetails,
	StyledCountryDetailsSection,
	StyledCountryName,
	StyledCountryField,
	StyledCountryFieldName,
	StyledCountryFieldNameValue,
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
				<StyledImg src={country?.flag} alt={`${country.name} flag`} />
			</StyledImgWrapper>
			<StyledCountryDetails>
				<StyledCountryName>{country.name}</StyledCountryName>
				<StyledCountryDetailsSection>
					<StyledCountryField>
						<StyledCountryFieldName>Native Name: </StyledCountryFieldName>
						<StyledCountryFieldNameValue>{country.name}</StyledCountryFieldNameValue>
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Population: </StyledCountryFieldName>
						<StyledCountryFieldNameValue>
							{getPopulationNumberWithComas(country.population)}
						</StyledCountryFieldNameValue>
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Region: </StyledCountryFieldName>
						<StyledCountryFieldNameValue>{country.region}</StyledCountryFieldNameValue>
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Sub Region: </StyledCountryFieldName>
						<StyledCountryFieldNameValue>{country.subregion}</StyledCountryFieldNameValue>
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Capital: </StyledCountryFieldName>
						<StyledCountryFieldNameValue>{country.capital}</StyledCountryFieldNameValue>
					</StyledCountryField>
				</StyledCountryDetailsSection>
				<StyledCountryDetailsSection>
					<StyledCountryField>
						<StyledCountryFieldName>Top Level Domain: </StyledCountryFieldName>
						{country.topLevelDomain.map((domain) => (
							<StyledCountryFieldNameValue key={domain}>{domain}</StyledCountryFieldNameValue>
						))}
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Currencies: </StyledCountryFieldName>
						{country.currencies.map((currency) => (
							<StyledCountryFieldNameValue>{currency.name}</StyledCountryFieldNameValue>
						))}
					</StyledCountryField>
					<StyledCountryField>
						<StyledCountryFieldName>Languages: </StyledCountryFieldName>
						{country.languages.map((language) => (
							<StyledCountryFieldNameValue>{language.name}</StyledCountryFieldNameValue>
						))}
					</StyledCountryField>
				</StyledCountryDetailsSection>
			</StyledCountryDetails>
			<div>
				<StyledTitle>Border Countries:</StyledTitle>
				<StyledBorderCountryWrapper>
					{country.borders.length ? (
						<>
							{country.borders.map((border) => (
								<BorderCountry>{border}</BorderCountry>
							))}
						</>
					) : (
						<StyledBorderCountry>No border countries</StyledBorderCountry>
					)}
				</StyledBorderCountryWrapper>
			</div>
		</StyledDetailsWrapper>
	);
};

export default CountryDetails;
