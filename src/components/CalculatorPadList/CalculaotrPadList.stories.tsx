import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalculatorPadList from './CalculatorPadList';

export default {
	title: 'CalculatorPadList',
	component: CalculatorPadList,
	decorators: [(Story) => <div style={{ width: '300px', height: '300px' }}>{Story()}</div>],
} as ComponentMeta<typeof CalculatorPadList>;

const Template: ComponentStory<typeof CalculatorPadList> = () => <CalculatorPadList />;

export const CalcualtorPadList = Template.bind({});
