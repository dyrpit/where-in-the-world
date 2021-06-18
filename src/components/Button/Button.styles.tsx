import styled from 'styled-components';

export const StyledButton = styled.button`
	margin: 20px 0;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.color.elements};
	border: none;
	box-shadow: ${({ theme }) => theme.boxShadow};
	cursor: pointer;

	& i {
		margin-right: 10px;
	}
`;
