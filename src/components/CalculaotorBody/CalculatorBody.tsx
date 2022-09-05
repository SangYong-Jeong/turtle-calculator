import { getCalculatorThemeProvider } from 'utils/CalculatorBodyThemeProvider';
import CalculatorNumber from 'components/CalculatorNumber/CalculatorNumber';
import { CalculatorBodyProps } from './CalculatorBody.types';
import { CalculatorBodyWrap } from './CalculatorBody.styles';

const CalculatorBody = ({ color }: CalculatorBodyProps) => {
	const CalculatorThemeProvider = getCalculatorThemeProvider(color);
	return (
		<CalculatorThemeProvider>
			<CalculatorBodyWrap>
				<CalculatorNumber />
			</CalculatorBodyWrap>
		</CalculatorThemeProvider>
	);
};

export default CalculatorBody;
