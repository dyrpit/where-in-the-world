import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 40px 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.color.elements};
`;

export const StyledNavTitle = styled.h1`
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledToggleThemeBtn = styled.button`
	border: none;
	background: transparent;
	outline: none;
	text-transform: capitalize;
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	cursor: pointer;

	& .far {
		margin-right: 10px;
	}
`;
