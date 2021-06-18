import { FC } from 'react';
import { Link } from 'react-router-dom';

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
		<Link to={country.name.toLowerCase()}>
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
		</Link>
	);
};

export default CountryItem;
