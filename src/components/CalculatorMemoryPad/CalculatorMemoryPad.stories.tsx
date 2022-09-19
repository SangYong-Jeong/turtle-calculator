import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalculatorMemoryPad from './CalculatorMemoryPad';

export default {
	title: 'CalculatorMemoryPad',
	component: CalculatorMemoryPad,
} as ComponentMeta<typeof CalculatorMemoryPad>;

const Template: ComponentStory<typeof CalculatorMemoryPad> = () => <CalculatorMemoryPad />;

export const MemoryPlus = Template.bind({});
