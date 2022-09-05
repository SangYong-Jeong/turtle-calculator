import { makeNumberPadElementArray } from 'utils/makeNumberPadElementArray';
import { CalculatorNumberProps } from './CalculatorNumber.type';

const CalculatorNumber = () => {
	const numberPadsArray = makeNumberPadElementArray();

	return <>{numberPadsArray.map((numberpad) => numberpad)}</>;
};

export default CalculatorNumber;
