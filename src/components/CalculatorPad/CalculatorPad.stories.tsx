import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MATH_SIGN, CALCULATOR_PAD_NUMBER } from 'lib/constants';
import CalculatorPad from './CalculatorPad';

export default {
	title: 'CalculatorPad',
	component: CalculatorPad,
	// decorator 작성 ( story 제대로 보이도록 )
	decorators: [(Story) => <div style={{ width: '80px', height: '80px' }}>{Story()}</div>],
} as ComponentMeta<typeof CalculatorPad>;

const Template: ComponentStory<typeof CalculatorPad> = (args) => <CalculatorPad {...args} />;

export const CalculatorPadOne = Template.bind({});
CalculatorPadOne.args = { numberOrSymbol: CALCULATOR_PAD_NUMBER.one };

export const CalculatorPadPlus = Template.bind({});
CalculatorPadPlus.args = { numberOrSymbol: MATH_SIGN.plus };

export const CalculatorPadEquality = Template.bind({});
CalculatorPadEquality.args = { numberOrSymbol: MATH_SIGN.equality };
