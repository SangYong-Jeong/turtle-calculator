import CalculatorPad from 'components/CalculatorPad/CalculatorPad';
import { numberPadsLength, MathSign } from 'lib/constants';

export const makeNumberPadElementArray = () => {
	const numberPadElementArray: JSX.Element[] = [];
	for (let number = 1; number <= numberPadsLength; number++) {
		numberPadElementArray.push(<CalculatorPad numberOrSymbol={number} />);
	}

	// 숫자패드 아래에 추가적으로 들어가는 '+/-' , '0', '.'
	const { changePlusMinus, dot } = MathSign;
	const changePlusMinusPad = <CalculatorPad numberOrSymbol={changePlusMinus} />;
	const zeroNumberPad = <CalculatorPad numberOrSymbol={0} />;
	const dotPad = <CalculatorPad numberOrSymbol={dot} />;
	numberPadElementArray.push(changePlusMinusPad, zeroNumberPad, dotPad);

	return numberPadElementArray;
};

export default {
	makeNumberPadElementArray,
};
