// 수학 기호들 모음 enum
export const MATH_SIGN = {
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
	delete: 'DELETE', // 특정 구분자 정해야 한다. 컴포넌트 안에서 렌더링 할 꺼니까
	percent: '%',
} as const;

export const CALCULATOR_PAD_NUMBER = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

// 수학 기호들 모음
export const ARRAY_CALCULATOR_PAD_ORDER = [
	MATH_SIGN.percent,
	MATH_SIGN.clearEntity,
	MATH_SIGN.clear,
	MATH_SIGN.delete,
	MATH_SIGN.oneOverX,
	MATH_SIGN.xSquared,
	MATH_SIGN.squareRootOfX,
	MATH_SIGN.division,
	CALCULATOR_PAD_NUMBER.seven,
	CALCULATOR_PAD_NUMBER.eight,
	CALCULATOR_PAD_NUMBER.nine,
	MATH_SIGN.times,
	CALCULATOR_PAD_NUMBER.four,
	CALCULATOR_PAD_NUMBER.five,
	CALCULATOR_PAD_NUMBER.six,
	MATH_SIGN.minus,
	CALCULATOR_PAD_NUMBER.one,
	CALCULATOR_PAD_NUMBER.two,
	CALCULATOR_PAD_NUMBER.three,
	MATH_SIGN.plus,
	MATH_SIGN.changePlusMinus,
	CALCULATOR_PAD_NUMBER.zero,
	MATH_SIGN.dot,
	MATH_SIGN.equality,
];

export default {
	MATH_SIGN,
	CALCULATOR_PAD_NUMBER,
	ARRAY_CALCULATOR_PAD_ORDER,
};
