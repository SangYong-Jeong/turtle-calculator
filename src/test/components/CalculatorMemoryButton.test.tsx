import { render, screen } from '@testing-library/react';
import CalculatorMemoryPad from 'components/CalculatorMemoryPad/CalculatorMemoryPad';

describe('<CalculatorMemoryPad />', () => {
	it('renders CalculatorMemoryPad', () => {
		render(<CalculatorMemoryPad />);
		screen.getAllByText('M+');
	});
});
