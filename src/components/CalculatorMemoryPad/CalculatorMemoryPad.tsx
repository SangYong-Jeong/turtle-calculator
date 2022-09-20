import { CalculatorMemoryPadProps } from './CalculatorMemoryPad.type';
import { MemoryPadButton } from './CalculatorMemoryPad.styles';

const CalculatorMemoryButton = (props: CalculatorMemoryPadProps) => {
	const { sign } = props;
	return <MemoryPadButton>{sign}</MemoryPadButton>;
};

export default CalculatorMemoryButton;
