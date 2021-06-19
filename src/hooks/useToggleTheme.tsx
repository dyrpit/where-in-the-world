import { useEffect, useState } from 'react';

export type UpdateType = () => void;

export enum THEME {
	LIGHT = 'light',
	DARK = 'dark',
}

export const useToggleTheme = (): [string, UpdateType] => {
	const [theme, setTheme] = useState<string>(THEME.LIGHT);

	const setUserTheme = (theme: string): void => {
		window.localStorage.setItem('theme', theme);
		setTheme(theme);
	};

	const toggleTheme: UpdateType = () => {
		if (theme === THEME.LIGHT) {
			setUserTheme(THEME.DARK);
		} else {
			setUserTheme(THEME.LIGHT);
		}
	};

	useEffect(() => {
		const userTheme: string = window.localStorage.getItem('theme') || THEME.LIGHT;

		setUserTheme(userTheme);
	}, []);

	return [theme, toggleTheme];
};
