import { NumberOrSymbol } from 'components/CalculatorPad/CalculatorPad.type';
import { MATH_SIGN } from 'lib/constants';
import { Color } from 'styles/Color';

export const makeCalculatorPadBackgroundColor = (numberOrSymbol: NumberOrSymbol): string => {
	const isNumberOrChangePlusMinusOrDot =
		typeof numberOrSymbol === 'number' ||
		numberOrSymbol === MATH_SIGN.changePlusMinus ||
		numberOrSymbol === MATH_SIGN.dot;

	const isEqual = numberOrSymbol === MATH_SIGN.equality;

	let backgroundColor: string;
	if (isNumberOrChangePlusMinusOrDot) {
		backgroundColor = Color.Color_white;
	} else if (isEqual) {
		backgroundColor = Color.Color_pale_blue;
	} else {
		backgroundColor = Color.Color_mystic;
	}

	return backgroundColor;
};

export default {
	makeCalculatorPadBackgroundColor,
};
