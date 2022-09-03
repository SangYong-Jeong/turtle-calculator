import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalculatorBody from './CalculatorBody';

export default {
	title: 'CalculatorBody',
	component: CalculatorBody,
	decorators: [
		(Story) => (
			<div style={{ width: '300px', height: '300px' }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof CalculatorBody>;

const Template: ComponentStory<typeof CalculatorBody> = () => <CalculatorBody />;

export const WhiteCalculatorBody = Template.bind({});
