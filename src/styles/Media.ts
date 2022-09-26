import { css, CSSObject, SimpleInterpolation } from 'styled-components';
import { deviceSizes } from './MediaType';

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
