import { NumberPadButton } from './CalculatorPad.styles';
import { NumberPadProps } from './CalculatorPad.type';

const NumberPad = (props: NumberPadProps) => {
	const { number } = props;
	return <NumberPadButton>{number}</NumberPadButton>;
};

export default NumberPad;
