import styled from 'styled-components';
import { Color } from '../../styles/Color';
import { CalculatorBodyProps } from './CalculatorBody.type';

export const CalculatorBodyWrap = styled.div<CalculatorBodyProps>`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	row-gap: 10px;
	column-gap: 10px;
	padding: 10px;
	width: 100%;
	height: 100%;
	border: 3px solid #ebebeb;
	border-radius: 10px;
`;

export default {
	CalculatorBodyWrap,
};
