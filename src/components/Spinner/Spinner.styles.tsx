import styled from 'styled-components';

interface IProps {
	size: number;
}

export const StyledSpinnerWrapper = styled.div<IProps>`
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size * 1.5}px`};
	margin: 0 auto;
	display: flex;
	align-items: center;
`;

export const StyledSpinnerText = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	text-align: center;
`;
