import styled from 'styled-components';

export const StyledBorderCountry = styled.div`
	background-color: ${({ theme }) => theme.color.elements};
	padding: 10px 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	margin: 10px 5px;
`;
