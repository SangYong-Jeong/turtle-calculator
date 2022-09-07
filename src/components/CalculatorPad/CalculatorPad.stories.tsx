import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalculatorPad from './CalculatorPad';

export default {
	title: 'CalculatorPad',
	component: CalculatorPad,
	// decorator 작성 ( story 제대로 보이도록 )
	decorators: [(Story) => <div style={{ width: '80px', height: '80px' }}>{Story()}</div>],
} as ComponentMeta<typeof CalculatorPad>;

const Template: ComponentStory<typeof CalculatorPad> = (args) => <CalculatorPad {...args} />;

export const CalculatorPadOne = Template.bind({});
CalculatorPadOne.args = { numberOrSymbol: 1 };
