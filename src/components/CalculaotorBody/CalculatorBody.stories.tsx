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

const Template: ComponentStory<typeof CalculatorBody> = (args) => <CalculatorBody {...args} />;

export const WhiteCalculatorBody = Template.bind({});
WhiteCalculatorBody.args = {
	color: 'white',
};

export const BlackCalculatorBody = Template.bind({});
BlackCalculatorBody.args = {
	color: 'black',
};

export const MintCalculatorBody = Template.bind({});
MintCalculatorBody.args = {
	color: 'mint',
};

export const SkyBlueCalculatorBody = Template.bind({});
SkyBlueCalculatorBody.args = {
	color: 'sky-blue',
};
