import styled from 'styled-components';

export const StyledDetailsWrapper = styled.div`
	padding: 30px 0;
`;

export const StyledImgWrapper = styled.div`
	margin: 0 auto;
	width: 300px;
`;

export const StyledImg = styled.img`
	width: 100%;
`;

export const StyledCountryDetails = styled.div`
	margin-top: 40px;
`;

export const StyledCountryDetailsSection = styled.div`
	margin-bottom: 40px;
`;

export const StyledCountryName = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 30px;
`;

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

export const StyledBorderCountryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const StyledTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	margin-bottom: 10px;
`;
