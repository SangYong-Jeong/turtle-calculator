import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MEMORY_PAD_SIGN } from 'lib/constants';
import CalculatorMemoryPad from './CalculatorMemoryPad';

export default {
	title: 'CalculatorMemoryPad',
	component: CalculatorMemoryPad,
	decorators: [(Story) => <div style={{ width: '40px' }}>{Story()}</div>],
} as ComponentMeta<typeof CalculatorMemoryPad>;

const Template: ComponentStory<typeof CalculatorMemoryPad> = (args) => <CalculatorMemoryPad {...args} />;

export const MemoryPlus = Template.bind({});
MemoryPlus.args = {
	sign: MEMORY_PAD_SIGN.plus,
};

export const MemoryMinus = Template.bind({});
MemoryMinus.args = {
	sign: MEMORY_PAD_SIGN.minus,
};
