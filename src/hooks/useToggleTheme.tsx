import { useState } from 'react';

export type UpdateType = () => void;

export enum THEME {
	LIGHT = 'light',
	DARK = 'dark',
}

export const useToggleTheme = (): [string, UpdateType] => {
	const [theme, setTheme] = useState('light');

	const toggleTheme: UpdateType = () => {
		if (theme === THEME.LIGHT) {
			setTheme(THEME.DARK);
		} else {
			setTheme(THEME.LIGHT);
		}
	};

	return [theme, toggleTheme];
};
