import { FiDelete } from 'react-icons/fi';
import { CalculatorPadButton } from './CalculatorPad.styles';
import { CalculatorPadProps } from './CalculatorPad.type';

const CalculatorPad = (props: CalculatorPadProps) => {
	const { numberOrSymbol } = props;
	return (
		<CalculatorPadButton numberOrSymbol={numberOrSymbol}>
			{numberOrSymbol === 'DELETE' ? <FiDelete /> : numberOrSymbol}
		</CalculatorPadButton>
	);
};

export default CalculatorPad;
