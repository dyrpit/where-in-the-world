import styled from 'styled-components';

export const StyledDetailsWrapper = styled.div`
	padding: 30px 0;

	@media ${({ theme }) => theme.devices.tablet} {
		display: flex;
		padding: 60px 0;
	}
`;

export const StyledImgWrapper = styled.div`
	margin: 0 auto;
	width: 300px;

	@media ${({ theme }) => theme.devices.tablet} {
		flex-basis: 40%;
		align-self: center;
	}
`;

export const StyledImg = styled.img`
	width: 100%;
`;

export const StyledCountryDetails = styled.div`
	margin-top: 40px;

	@media ${({ theme }) => theme.devices.tablet} {
		flex-basis: 60%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 0;
		margin-left: 100px;
	}
`;

export const StyledCountryDetailsSection = styled.div`
	margin-bottom: 40px;

	@media ${({ theme }) => theme.devices.tablet} {
		flex-basis: 50%;
	}
`;

export const StyledCountryName = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 30px;

	@media ${({ theme }) => theme.devices.tablet} {
		flex-basis: 100%;
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const StyledBorderCountryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const StyledTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	margin-bottom: 10px;
`;
