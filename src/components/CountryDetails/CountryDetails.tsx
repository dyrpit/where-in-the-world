import { FC } from 'react';
import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';
import { ICountry } from '../../views/HomeView/HomeView';
import BorderCountry from '../BorderCountryItem/BorderCountryItem';
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
				<StyledImg src={country?.flag} alt={`${country.name} flag`} />
			</StyledImgWrapper>
			<StyledCountryDetails>
				<StyledCountryName>{country.name}</StyledCountryName>
				<StyledCountryDetailsSection>
					<CountryDetailsField fieldName='Native name:' fieldValue={country.name} />
					<CountryDetailsField
						fieldName='Population:'
						fieldValue={getPopulationNumberWithComas(country.population)}
					/>
					<CountryDetailsField fieldName='Region:' fieldValue={country.region} />
					<CountryDetailsField fieldName='Sub Region:' fieldValue={country.subregion} />
					<CountryDetailsField fieldName='Capital:' fieldValue={country.capital} />
				</StyledCountryDetailsSection>
				<StyledCountryDetailsSection>
					<CountryDetailsField fieldName='Top Level Domain:' fieldValue={country.topLevelDomain} />
					<CountryDetailsField fieldName='Currencies:' fieldValue={country.currencies} />
					<CountryDetailsField fieldName='Languages:' fieldValue={country.languages} />
				</StyledCountryDetailsSection>
				<div>
					<StyledTitle>Border Countries:</StyledTitle>
					<StyledBorderCountryWrapper>
						{country.borders.length ? (
							<>
								{country.borders.map((border) => (
									<BorderCountry key={border}>{border}</BorderCountry>
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
