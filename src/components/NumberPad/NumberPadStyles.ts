import styled from 'styled-components';
import { Color } from '../../styles/Color';

// box shadow 가미한 버튼 생성
export const NumberPadButton = styled.div`
	background-color: ${Color.Color_white};
	color: ${Color.Color_black};
	border: 1px solid ${Color.Color_black};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	/* box-shadow:  */
`;

export default {
	NumberPadButton,
};
