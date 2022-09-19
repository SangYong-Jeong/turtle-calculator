import { makeCalculatorPadBackgroundColor } from 'utils/makeCalculatorPadBackgroundColor';
import { MATH_SIGN, CALCULATOR_PAD_NUMBER } from 'lib/constants';
import { Color } from 'styles/Color';

// makeCalculatorPadBackgroundColor test
describe('makeCalculatorPadBackgroundColor test', () => {
	it('makes backgroundColor white', () => {
		const backgroundColor = makeCalculatorPadBackgroundColor(CALCULATOR_PAD_NUMBER.one);
		expect(backgroundColor).toBe(Color.Color_white);
	});
	it('makes backgroundColor blue', () => {
		const backgroundColor = makeCalculatorPadBackgroundColor(MATH_SIGN.clear);
		expect(backgroundColor).toBe(Color.Color_gray_blue);
	});
	it('makes backgroundColor gray_blue', () => {
		const backgroundColor = makeCalculatorPadBackgroundColor(MATH_SIGN.equality);
		expect(backgroundColor).toBe(Color.Color_pale_blue);
	});
});
