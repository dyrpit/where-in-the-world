import styled from 'styled-components';

export const StyledItemWrapper = styled.div`
	border-radius: 4px;
	width: 90%;
	min-width: 300px;
	max-width: 300px;
	margin: 0 20px 40px 20px;
	background-color: ${({ theme }) => theme.color.elements};
`;

export const StyleItemImg = styled.img`
	width: 300px;
	height: 200px;
	border-radius: 4px 4px 0 0;
`;

export const StyledItemContent = styled.div`
	padding: 30px 20px 40px 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const StyledItemTitle = styled.p`
	margin-bottom: 20px;
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledItemField = styled.p`
	margin-bottom: 5px;
`;

export const StyledItemFieldName = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
