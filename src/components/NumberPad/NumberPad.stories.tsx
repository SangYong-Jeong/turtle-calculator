import { ComponentMeta, ComponentStory } from '@storybook/react';
import NumberPad from './NumberPad';

export default {
	title: 'NumberPad',
	component: NumberPad,
	// decorator 작성 ( story 제대로 보이도록 )
	decorators: [(Story) => <div style={{ width: '80px', height: '80px' }}>{Story()}</div>],
} as ComponentMeta<typeof NumberPad>;

const Template: ComponentStory<typeof NumberPad> = (args) => <NumberPad {...args} />;

export const NumberPadOne = Template.bind({});
NumberPadOne.args = { number: 1 };
