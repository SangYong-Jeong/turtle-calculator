import CalculatorPad from 'components/CalculatorPad/CalculatorPad';
import { numberPadsLength } from 'lib/constants';

export const makeNumberPadElementArray = () => {
	const numberPadElementArray: JSX.Element[] = [];
	for (let number = 1; number <= numberPadsLength; number++) {
		numberPadElementArray.push(<CalculatorPad number={number} />);
	}

	return numberPadElementArray;
};

export default {
	makeNumberPadElementArray,
};
