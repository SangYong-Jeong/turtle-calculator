import { CalculatorPadButton } from './CalculatorPad.styles';
import { CalculatorPadProps } from './CalculatorPad.type';

const CalculatorPad = (props: CalculatorPadProps) => {
	const { numberOrSymbol } = props;
	return <CalculatorPadButton>{numberOrSymbol}</CalculatorPadButton>;
};

export default CalculatorPad;
