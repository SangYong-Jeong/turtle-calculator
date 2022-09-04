import { DefaultTheme } from 'styled-components';
import { Color } from './Color';

export const themeCalculatorBodyWhite: DefaultTheme = {
	backgorundColor: Color.Color_white,
	borderColor: Color.Color_gray,
};

export const themeCalculatorBodyBlack = {
	backgorundColor: Color.Color_black,
	borderColor: Color.Color_gray,
	button: {
		backgroundColor: Color.Color_gray,
		color: Color.Color_light_black,
		borderColor: Color.Color_white,
	},
};

export const themeCalculatorBodyMint = {
	backgorundColor: Color.Color_mint,
	borderColor: Color.Color_gray,
};

export const themeCalculatorBodySkyBlue = {
	backgorundColor: Color.Color_sky_blue,
	borderColor: Color.Color_gray,
};

// theme 접근자 따로 만들 예정, 이 루틴 export 해서 특정 props 에 맞게 theme return 해주고 해당 theme을 themeprovier에 집어 넣는게 더 깔끔 할 것 같다. 정보은닉 + 추상화

export default {
	themeCalculatorBodyWhite,
	themeCalculatorBodyBlack,
	themeCalculatorBodyMint,
	themeCalculatorBodySkyBlue,
};
