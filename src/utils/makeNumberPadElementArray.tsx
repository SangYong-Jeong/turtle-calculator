import NumberPad from 'components/NumberPad/NumberPad';
import { numberPadsLength } from 'lib/constants';

export const makeNumberPadElementArray = () => {
	const numberPadElementArray: JSX.Element[] = [];
	for (let number = 1; number <= numberPadsLength; number++) {
		numberPadElementArray.push(<NumberPad number={number} />);
	}
	return numberPadElementArray;
};

export default {
	makeNumberPadElementArray,
};
