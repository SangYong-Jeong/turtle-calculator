import { NumberPadButton } from './NumberPadStyles';
import { NumberPadProps } from './NumberPadType';

const NumberPad = (props: NumberPadProps) => {
	const { number } = props;
	return <NumberPadButton>{number}</NumberPadButton>;
};

export default NumberPad;
