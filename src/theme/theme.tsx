import { DefaultTheme } from 'styled-components';

const defaultTheme = {
	boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)',
	fontSize: {
		s: '14px',
		m: '18px',
		l: '26px',
		xl: '32px',
		xxl: '38px',
		sl: '44px',
	},
	fontWeight: {
		thin: 300,
		regular: 600,
		bold: 800,
	},
	devices: {
		mobileM: `(min-width: 375px)`,
		tablet: `(min-width: 768px)`,
		laptop: `(min-width: 1024px)`,
		desktop: `(min-width: 1440px)`,
	},
};

export const lightTheme: DefaultTheme = {
	color: {
		text: 'hsl(200, 15%, 8%)',
		background: 'hsl(0, 0%, 98%)',
		elements: 'hsl(0, 0%, 100%)',
		input: 'hsl(0, 0%, 52%)',
	},

	boxShadow: defaultTheme.boxShadow,
	fontSize: defaultTheme.fontSize,
	fontWeight: defaultTheme.fontWeight,
	devices: defaultTheme.devices,
};

export const darkTheme: DefaultTheme = {
	color: {
		text: 'hsl(0, 0%, 100%)',
		background: 'hsl(207, 26%, 17%)',
		elements: 'hsl(209, 23%, 22%)',
		input: 'hsl(0, 0%, 100%)',
	},

	boxShadow: defaultTheme.boxShadow,
	fontSize: defaultTheme.fontSize,
	fontWeight: defaultTheme.fontWeight,
	devices: defaultTheme.devices,
};
