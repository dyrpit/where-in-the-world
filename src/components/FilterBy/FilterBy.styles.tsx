import styled from 'styled-components';

export const StyledFilterByWrapper = styled.div`
	position: relative;
	box-shadow: ${({ theme }) => theme.boxShadow};
	margin-bottom: 30px;
	min-width: 190px;
`;

export const StyledFilterByBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	height: 100%;
	width: 100%;
	border-radius: 4px;
	padding: 15px 20px;
	background-color: ${({ theme }) => theme.color.elements};
	outline: none;
	cursor: pointer;
`;

export const StyledBtnText = styled.span`
	margin-right: 50px;
`;
