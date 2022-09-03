import { NumberPadButton } from './NumberPad.styles';
import { NumberPadProps } from './NumberPad.type';

const NumberPad = (props: NumberPadProps) => {
	const { number } = props;
	return <NumberPadButton>{number}</NumberPadButton>;
};

export default NumberPad;
