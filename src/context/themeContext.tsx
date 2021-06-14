import { createContext, FC } from 'react';
import { THEME, useToggleTheme, UpdateType } from '../hooks/useToggleTheme';

interface ITheme {
	theme: string;
	toggleTheme: UpdateType;
}

const defaultSetState: UpdateType = () => {};
const defaultTheme: string = THEME.LIGHT;

export const ThemeContext = createContext<ITheme>({
	theme: defaultTheme,
	toggleTheme: defaultSetState,
});

const ThemeProvider: FC = ({ children }) => {
	const [theme, toggleTheme] = useToggleTheme();

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
