import styled from 'styled-components';

export const StyledFilterByWrapper = styled.div`
	position: relative;
	flex-basis: 60%;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const StyledFilterByBtn = styled.button`
	display: flex;
	align-items: center;
	border: none;
	border-radius: 4px;
	padding: 15px 20px;
	background-color: ${({ theme }) => theme.color.elements};
`;

export const StyledBtnText = styled.span`
	margin-right: 50px;
`;
