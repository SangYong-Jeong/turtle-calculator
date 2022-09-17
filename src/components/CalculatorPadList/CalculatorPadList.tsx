import CalculatorPad from 'components/CalculatorPad/CalculatorPad';
import { CalculatorListWrap } from 'components/CalculatorPadList/CalculatorPadList.styles';
import { ARRAY_CALCULATOR_PAD_ORDER } from 'lib/constants';

const CalculatorPadList = () => (
	<CalculatorListWrap>
		{ARRAY_CALCULATOR_PAD_ORDER.map((padLabel) => (
			<CalculatorPad numberOrSymbol={padLabel} key={`CalculatorPad_${padLabel}`} />
		))}
	</CalculatorListWrap>
);

export default CalculatorPadList;
