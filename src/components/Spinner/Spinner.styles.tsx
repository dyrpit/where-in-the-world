import styled from 'styled-components';

interface IProps {
	size: number;
}

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
`;

export const StyledSpinnerWrapper = styled.div<IProps>`
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size * 1.5}px`};
	margin: 0 auto;
	display: flex;
	align-items: center;
`;

export const StyledSpinnerText = styled.p`
	text-align: center;
`;
