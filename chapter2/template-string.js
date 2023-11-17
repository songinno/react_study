/* 기존 작성법 */
// 이름을 저장한 변수
const name = "누시다";

// 나이를 저장한 변수
const age = 24;

const message = "내 이름은 " + name + "이고, 나이는 " + age + "입니다.";
console.log(message);

/* 템플릿 문자열 이용 */
const message2 = `내 이름은 ${name}이고, 나이는 ${age}입니다.`;
console.log(message2);

/* 함수 호출과 계산 실행 */
function sayHello() {
    return "안녕하세요!";
}

const month = 1;

const message3 = `여러분 ${sayHello()} 오늘부터 ${month * 11}월 입니다.`;
console.log(message3)