import { DefaultTheme, ThemeProvider } from 'styled-components';
import { CalculatorBodyColors } from 'components/CalculatorBody/CalculatorBody.type';
import {
	themeCalculatorBodyWhite,
	themeCalculatorBodyBlack,
	themeCalculatorBodyMint,
	themeCalculatorBodySkyBlue,
} from 'styles/Theme';

export const getCalculatorThemeProvider = (color: CalculatorBodyColors) => {
	let theme: DefaultTheme = {};

	switch (color) {
		case 'white':
			theme = themeCalculatorBodyWhite;
			break;
		case 'black':
			theme = themeCalculatorBodyBlack;
			break;
		case 'mint':
			theme = themeCalculatorBodyMint;
			break;
		case 'sky-blue':
			theme = themeCalculatorBodySkyBlue;
			break;
		default:
			theme = themeCalculatorBodyWhite;
	}
	return ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default getCalculatorThemeProvider;
