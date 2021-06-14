import { FC } from 'react';

import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';

import {
	StyledItemWrapper,
	StyledItemContent,
	StyleItemImg,
	StyledItemField,
	StyledItemFieldName,
	StyledItemTitle,
} from './CountryItem.styles';

interface IProps {
	country: {
		name: string;
		flag: string;
		population: number;
		region: string;
		subregion: string;
		capital: string;
		nativName: string;
		topLevelDomain: string[];
		currencies: object[];
		languages: object[];
	};
}

const CountryItem: FC<IProps> = ({ country }) => {
	if (country.name === 'Poland') {
		console.log(country);
	}

	return (
		<StyledItemWrapper>
			<StyleItemImg src={country.flag} alt='' />
			<StyledItemContent>
				<StyledItemTitle>{country.name}</StyledItemTitle>
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
	);
};

export default CountryItem;
