import { FC } from 'react';
import { ICurrency, ILanguage } from '../../views/HomeView/HomeView';

import {
	StyledCountryField,
	StyledCountryFieldName,
	StyledCountryFieldNameValue,
} from './CountryDetailsField.styles';

interface IProps {
	fieldName: string;
	fieldValue: string | string[] | ICurrency[] | ILanguage[];
}

const CountryDetailsField: FC<IProps> = ({ fieldName, fieldValue }) => {
	const displayedValue = !Array.isArray(fieldValue)
		? fieldValue
		: fieldValue.map((value) => (
				<StyledCountryFieldNameValue>
					{typeof value === 'string' ? value : value.name}
				</StyledCountryFieldNameValue>
		  ));

	return (
		<StyledCountryField>
			<StyledCountryFieldName>{fieldName} </StyledCountryFieldName>
			{displayedValue}
		</StyledCountryField>
	);
};

export default CountryDetailsField;
