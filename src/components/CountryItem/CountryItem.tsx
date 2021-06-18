import { FC } from 'react';

import { getPopulationNumberWithComas } from '../../utils/getPopulationNumberWithComas';
import { ICountry } from '../../views/HomeView/HomeView';

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
		//TODO7: make all items same size, large country names destroys layout
		<StyledItemWrapper>
			<StyleItemImg src={country.flag} alt='' />
			<StyledItemContent>
				<StyledItemTitle to={country.name.toLowerCase()}>{country.name}</StyledItemTitle>
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
