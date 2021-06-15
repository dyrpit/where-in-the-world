import styled from 'styled-components';

export const StyledFilterByWrapper = styled.div`
	position: relative;
	box-shadow: ${({ theme }) => theme.boxShadow};
	margin-bottom: 30px;
`;

export const StyledFilterByBtn = styled.button`
	display: flex;
	align-items: center;
	border: none;
	height: 100%;
	border-radius: 4px;
	padding: 15px 20px;
	background-color: ${({ theme }) => theme.color.elements};
	outline: none;
	cursor: pointer;
`;

export const StyledBtnText = styled.span`
	margin-right: 50px;
`;
