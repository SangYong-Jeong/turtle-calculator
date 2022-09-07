// numberPad의 길이 1 ~ 9
export const numberPadsLength = 9;

// 수학 기호들 모음 enum
export const MathSign = {
	changePlusMinus: '+/-',
	dot: '.',
	plus: '+',
	minus: '-',
	times: '×',
	division: '÷',
	equality: '=',
	xSquared: 'x²',
	oneOverX: '1/x',
	squareRootOfX: '√x',
	clear: 'C',
	clearEntity: 'CE',
	percent: '%',
} as const;

// 수학 기호들 모음

// delete 는 아이콘 사용 예정 -> react-icons
export const percent = '%';

export default {
	numberPadsLength,
	MathSign,
};
