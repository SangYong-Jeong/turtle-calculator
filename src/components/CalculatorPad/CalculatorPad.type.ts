import { MathSign } from 'lib/constants';

export interface CalculatorPadProps {
	numberOrSymbol: number | typeof MathSign[keyof typeof MathSign];
}
