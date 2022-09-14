import { render, screen } from '@testing-library/react';
import CalculatorPad from 'components/CalculatorPad/CalculatorPad';

describe('<CalculatorPad />', () => {
	const sampleCalculatorPadProps = 1;
	it('renders CalculatorPad', () => {
		render(<CalculatorPad numberOrSymbol={sampleCalculatorPadProps} />);
		screen.getByText(sampleCalculatorPadProps);
	});
});
