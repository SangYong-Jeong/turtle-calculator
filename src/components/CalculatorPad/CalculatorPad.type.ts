import { MATH_SIGN } from 'lib/constants';

export type NumberOrSymbol = number | typeof MATH_SIGN[keyof typeof MATH_SIGN];

export interface CalculatorPadProps {
	numberOrSymbol: NumberOrSymbol;
}
