import { makeNumberPadElementArray } from 'utils/makeNumberPadElementArray';
import { getCalculatorThemeProvider } from 'utils/CalculatorBodyThemeProvider';
import { CalculatorBodyWrap } from './CalculatorBody.styles';
import { CalculatorBodyProps } from './CalculatorBody.type';

const CalculatorBody = ({ color }: CalculatorBodyProps) => {
	const numberPadsArray = makeNumberPadElementArray();
	const CalculatorThemeProvider = getCalculatorThemeProvider(color);

	return (
		<CalculatorThemeProvider>
			<CalculatorBodyWrap>{numberPadsArray.map((numberpad) => numberpad)}</CalculatorBodyWrap>
		</CalculatorThemeProvider>
	);
};

export default CalculatorBody;
