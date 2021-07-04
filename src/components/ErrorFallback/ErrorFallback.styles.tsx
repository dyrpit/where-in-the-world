import styled from 'styled-components';

export const StyledErrorFallbackWrapper = styled.div`
	padding: 10px 20px;
	margin: 10px;
	border-radius: 4px;
	text-align: center;
	background-color: ${({ theme }) => theme.color.elements};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const StyledErrorFallbackHighlight = styled.span`
	margin-right: 5px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
