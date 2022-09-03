// 옵션들을 배열로 리턴 ( background, color, border )
// 그래야 template literal 안에서 ... (spread) 사용 가능

// 확인 결과, ThemeProvider 이용해서 계산기의 theme 변경 가능할 것 같다. 활용해 보자!
// https://velog.io/@hwang-eunji/styled-component-typescript

export const getCalculatorBodyColorStyle = (color: string) => {};

export default {
	getCalculatorBodyColorStyle,
};
