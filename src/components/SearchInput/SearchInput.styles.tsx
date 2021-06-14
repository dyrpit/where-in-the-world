import styled from 'styled-components';

export const StyledSearchInputWrapper = styled.div`
	display: flex;
	padding: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	flex-basis: 100%;
	color: ${({ theme }) => theme.color.input};
	background-color: ${({ theme }) => theme.color.elements};
	border-radius: 4px;
`;

export const StyledFilterBtn = styled.button`
	font-size: ${({ theme }) => theme.fontSize.m};
	background-color: transparent;
	margin: 0 20px;
	border: none;
	outline: none;
	cursor: pointer;
`;

export const StyledFilterInput = styled.input`
	background-color: transparent;
	padding: 10px;
	flex-grow: 1;
	border: none;
	outline: none;
`;
