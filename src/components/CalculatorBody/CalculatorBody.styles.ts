import styled from 'styled-components';

export const CalculatorBodyWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	row-gap: 10px;
	column-gap: 10px;
	padding: 10px;
	width: 100%;
	height: 100%;
	border: 3px solid;
	border-radius: 10px;
	border-color: ${(props) => props.theme.borderColor};
	background-color: ${(props) => props.theme.backgorundColor};
`;

export default {
	CalculatorBodyWrap,
};
