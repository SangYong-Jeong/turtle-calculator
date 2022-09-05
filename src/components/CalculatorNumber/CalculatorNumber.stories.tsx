import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CalculatorBodyWrap } from 'components/CalculaotorBody/CalculatorBody.styles';
import CalculatorNumber from './CalculatorNumber';

export default {
	title: 'CalculatorNumber',
	component: CalculatorNumber,
	decorators: [
		(Story) => (
			<div style={{ width: '300px', height: '300px' }}>
				<CalculatorBodyWrap>
					<Story />
				</CalculatorBodyWrap>
			</div>
		),
	],
} as ComponentMeta<typeof CalculatorNumber>;

const Template: ComponentStory<typeof CalculatorNumber> = () => <CalculatorNumber />;

export const CalculatorNumberStory = Template.bind({});
