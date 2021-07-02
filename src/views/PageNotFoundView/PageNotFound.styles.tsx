import styled from 'styled-components';

export const StyledPageNotFoundTitle = styled.h2`
	margin-bottom: 30px;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledPageNotFoundDescription = styled.p`
	margin-top: 30px;
	margin-bottom: 30px;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledPageNotFoundImg = styled.img`
	width: 100%;
`;
