import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBorderCountry = styled(Link)`
	background-color: ${({ theme }) => theme.color.elements};
	padding: 10px 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	margin: 10px 5px;
`;
