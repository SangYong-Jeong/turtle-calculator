import { render, screen } from '@testing-library/react';
import CalculatorPad from 'components/CalculatorPad/CalculatorPad';
import { NumberOrSymbol } from 'components/CalculatorPad/CalculatorPad.type';
import { CALCULATOR_PAD_NUMBER, MATH_SIGN } from 'lib/constants';

describe('<CalculatorPad />', () => {
	// setup 함수
	const setup = (numberOrSymbol: NumberOrSymbol): React.ReactElement => (
		<CalculatorPad numberOrSymbol={numberOrSymbol} />
	);

	// 숫자 렌더링 잘 되는지?
	it('renders CalculatorPad (number - one)', () => {
		const calculaotrPadComponent = setup(CALCULATOR_PAD_NUMBER.one);
		render(calculaotrPadComponent);
		screen.getByText(CALCULATOR_PAD_NUMBER.one);
	});

	// 수학 기호 렌더링 잘 되는지?
	it('renders CalculatorPad (sign - plus)', () => {
		const calculaotrPadComponent = setup(MATH_SIGN.plus);
		render(calculaotrPadComponent);
		screen.getByText(MATH_SIGN.plus);
	});
});
