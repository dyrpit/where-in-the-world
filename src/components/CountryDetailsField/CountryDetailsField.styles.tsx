import styled from 'styled-components';

export const StyledCountryField = styled.p`
	margin-bottom: 15px;
`;

export const StyledCountryFieldName = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-right: 5px;
`;

export const StyledCountryFieldNameValue = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.thin};
	margin-right: 5px;

	&::after {
		content: ',';
	}

	&:last-child::after {
		content: '';
	}
`;
