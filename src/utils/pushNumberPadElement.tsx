import CalculatorPad from 'components/CalculatorPad/CalculatorPad';
import { maekStartNumberAndEndNumber } from './makeStartNumberAndEndNumber';

export const pushNumberPadElement = (numberPadsLength: number, numberPadElementArray: JSX.Element[]) => {
	const { startNumber, endNumber } = maekStartNumberAndEndNumber(numberPadsLength);
	for (let number = startNumber; number <= endNumber; number++) {
		numberPadElementArray.push(<CalculatorPad numberOrSymbol={number} />);
	}
};

export default {
	pushNumberPadElement,
};
