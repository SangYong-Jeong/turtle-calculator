import { render, screen } from '@testing-library/react';
import CalculatorPadList from 'components/CalculatorPadList/CalculatorPadList';
import { MATH_SIGN, CALCULATOR_PAD_NUMBER } from 'lib/constants';

describe('<CalculatorPadList />', () => {
	// CalculatorPadList 렌더링 잘 되는지?
	it('renders CalculatorPadList with number and sign of math', () => {
		render(<CalculatorPadList />);
		screen.getByText(CALCULATOR_PAD_NUMBER.one);
		screen.getByText(MATH_SIGN.plus);
	});
});
