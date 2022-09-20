import { render, screen } from '@testing-library/react';
import CalculatorMemoryPad from 'components/CalculatorMemoryPad/CalculatorMemoryPad';
import { MEMORY_PAD_SIGN } from 'lib/constants';

describe('<CalculatorMemoryPad />', () => {
	it('renders CalculatorMemoryPad', () => {
		render(<CalculatorMemoryPad sign={MEMORY_PAD_SIGN.minus} />);
		screen.getAllByText('M-');
	});
});
