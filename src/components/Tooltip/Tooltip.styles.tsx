import styled from 'styled-components';

interface IProps {
	isOpen: boolean;
}

export const StyledTooltipList = styled.ul<IProps>`
	position: absolute;
	left: 0;
	right: 0;
	top: 110%;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	list-style-type: none;
	background-color: ${({ theme }) => theme.color.elements};
	border-radius: 4px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const StyledTooltipItem = styled.li`
	padding: 15px 20px;
`;
