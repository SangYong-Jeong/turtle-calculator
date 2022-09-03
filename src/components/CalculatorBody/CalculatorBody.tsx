import { makeNumberPadElementArray } from 'utils/makeNumberPadElementArray';
import { CalculatorBodyWrap } from './CalculatorBody.styles';

const CalculatorBody = () => {
	const numberPadsArray = makeNumberPadElementArray();

	return <CalculatorBodyWrap>{numberPadsArray.map((numberpad) => numberpad)}</CalculatorBodyWrap>;
};

export default CalculatorBody;
