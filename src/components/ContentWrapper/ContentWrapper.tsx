import { FC } from 'react';

import { StyledWrapper } from './ContentWrapper.styles';

interface IProps {
	children: React.ReactNode;
}

const ContentWrapper: FC<IProps> = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default ContentWrapper;
