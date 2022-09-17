import { getCalculatorThemeProvider } from 'utils/CalculatorBodyThemeProvider';
import { CalculatorBodyProps } from './CalculatorBody.types';
import { CalculatorBodyWrap } from './CalculatorBody.styles';

const CalculatorBody = ({ color }: CalculatorBodyProps) => {
	const CalculatorThemeProvider = getCalculatorThemeProvider(color);
	return (
		<CalculatorThemeProvider>
			<CalculatorBodyWrap />
		</CalculatorThemeProvider>
	);
};

export default CalculatorBody;
