import { css, CSSObject, SimpleInterpolation } from 'styled-components';

const deviceSizes = {
	phones: {
		condition: 'min-width',
		size: '600px',
	},
	portraitTablets: {
		condition: 'max-width',
		size: '600px',
	},
	landscapeTablets: {
		condition: 'max-width',
		size: '768px',
	},
	laptops: {
		condition: 'max-width',
		size: '992px',
	},
	desktops: {
		condition: 'max-width',
		size: '1200px',
	},
} as const;

export const makeMediaQuery = Object.entries(deviceSizes).reduce(
	(acc, [deviceLabel, deviceSize]) => ({
		...acc,
		[deviceLabel]: (first: CSSObject, ...interpolations: SimpleInterpolation[]) => {
			const isMaxWidth = deviceSize.condition === 'max-width';
			if (isMaxWidth) {
				return css`
					@media (max-width: ${deviceSize.size}px) {
						${css(first, ...interpolations)}
					}
				`;
			}
			return css`
				@media (min-width: ${deviceSize.size}px) {
					${css(first, ...interpolations)}
				}
			`;
		},
	}),
	{}
);

export default makeMediaQuery;
