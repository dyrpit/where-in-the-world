import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 20px;

	@media ${({ theme }) => theme.devices.tablet} {
		padding: 40px;
	}
`;
