import styled from 'styled-components';
import { Color } from '../../styles/Color';

export const CalculatorPadButton = styled.div`
	background-color: ${(props) => (props.theme.button ? props.theme.button.backgroundColor : Color.Color_white)};
	color: ${(props) => (props.theme.button ? props.theme.button.color : Color.Color_light_black)};
	border: 1px solid;
	border-color: ${(props) => (props.theme.button ? props.theme.button.borderColor : props.theme.borderColor)};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.125em, rgba(90, 125, 188, 0.05) 0px 0.125em 0.5em;
	font-family: 'Righteous', cursive;
	font-size: 1.5rem;
`;

export default {
	CalculatorPadButton,
};
