import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			text: string;
			background: string;
			elements: string;
			input: string;
		};

		boxShadow: string;

		fontWeight: {
			thin: number;
			regular: number;
			bold: number;
		};

		fontSize: {
			s: string;
			m: string;
			l: string;
			xl: string;
			xxl: string;
			sl: string;
		};

		// devices: {
		// 	mobileM: string;
		// 	tablet: string;
		// 	laptop: string;
		// 	desktop: string;
		// };
	}
}
