import styled from 'styled-components';

interface IProps {
	isOpen: boolean;
}

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-left: auto;
	max-width: 400px;
`;

export const PaginationPagesDisplay = styled.div`
	display: flex;
`;

export const PaginationPageItemDisplay = styled.p`
	padding: 10px 10px;
	margin-right: 5px;
	background-color: ${({ theme }) => theme.color.elements};
	border-radius: 4px;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const PaginationTooltipWrapper = styled.div`
	position: relative;
`;

export const PaginationControlBtn = styled.button`
	padding: 10px 15px;
	margin-right: 5px;
	background-color: ${({ theme }) => theme.color.elements};
	border: none;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const PaginationControlBtnText = styled.span`
	margin-right: 20px;
`;

export const PaginationTooltip = styled.ul<IProps>`
	position: absolute;
	left: 0;
	right: 0;
	top: 110%;
	list-style-type: none;
	background-color: ${({ theme }) => theme.color.elements};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	box-shadow: ${({ theme }) => theme.boxShadow};
	z-index: 400;
`;

export const PaginationTooltipItem = styled.li`
	padding: 10px 15px;
	cursor: pointer;
`;
