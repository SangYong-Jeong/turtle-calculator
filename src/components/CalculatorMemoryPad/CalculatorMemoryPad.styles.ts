import styled from 'styled-components';
import { Color } from 'styles/Color';

export const MemoryPadButton = styled.div`
	// font-size break point 에 맞게 세팅하는 방법 ( styled-components로 하는 방법 찾아보기 )

	&:hover {
		border: 1px solid ${Color.Color_light_black};
	}
`;

export default {
	MemoryPadButton,
};
