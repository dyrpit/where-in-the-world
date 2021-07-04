import { FC } from 'react';

import { THEME, UpdateType } from '../../hooks/useToggleTheme';

import { StyledNav, StyledNavTitle, StyledToggleThemeBtn } from './Nav.styles';

export interface IProps {
	toggleTheme: UpdateType;
	theme: string;
}

const Nav: FC<IProps> = ({ theme, toggleTheme }) => {
	const themeIcon =
		theme === THEME.LIGHT ? <i className='far fa-moon'></i> : <i className='far fa-sun'></i>;

	const themeText = `${theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT} mode`;

	return (
		<StyledNav>
			<StyledNavTitle>Where in the world?</StyledNavTitle>
			<StyledToggleThemeBtn onClick={() => toggleTheme()}>
				{themeIcon}
				{themeText}
			</StyledToggleThemeBtn>
		</StyledNav>
	);
};

export default Nav;
