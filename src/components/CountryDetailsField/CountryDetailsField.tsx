import { FC } from 'react';

import { ICurrencies, ILanguage } from '../../hooks/useFetch';

import {
  StyledCountryField,
  StyledCountryFieldName,
  StyledCountryFieldNameValue,
} from './CountryDetailsField.styles';

interface IProps {
  fieldName: string;
  fieldValue: string | string[] | ILanguage[] | ICurrencies;
}

const CountryDetailsField: FC<IProps> = ({ fieldName, fieldValue }) => {
  const displayedValue = () => {
    if (typeof fieldValue === 'string') {
      return fieldValue;
    }

    if (Array.isArray(fieldValue)) {
      return fieldValue.map((value) => (
        <StyledCountryFieldNameValue key={typeof value === 'string' ? value : value.name}>
          {typeof value === 'string' ? value : value.name}
        </StyledCountryFieldNameValue>
      ));
    }

    if (typeof fieldValue === 'object' && !Array.isArray(fieldValue) && fieldValue !== null) {
      return Object.keys(fieldValue).map((value) => (
        <StyledCountryFieldNameValue key={value}>{value}</StyledCountryFieldNameValue>
      ));
    }
  };

  return (
    <StyledCountryField>
      <StyledCountryFieldName>{fieldName} </StyledCountryFieldName>
      {displayedValue()}
    </StyledCountryField>
  );
};

export default CountryDetailsField;
