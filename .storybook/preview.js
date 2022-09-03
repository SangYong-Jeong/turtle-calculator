import { Normalize } from 'styled-normalize';

export const decorators = [
	(Story) => (
		<>
			<Normalize />
			<Story />
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
