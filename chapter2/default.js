/* 인수의 디폴트값 */
const sayHello = (name) => console.log(`${name}님 안녕하세요.`);
sayHello("누시다"); // 누시다님 안녕하세요.

// 인수가 전달되지 않은 경우
sayHello(); // undefined

// 인수의 디폴트값 지정
const sayHello2 = (name = "아무개") => console.log(`${name}님 안녕하세요.`);
sayHello2(); // 아무개님 안녕하세요

console.log('==================');

/* 객체 분할 대입의 디폴트값 */

// 존재하지 않는 속성 출력
const myProfile = {
    age: 24
};
const {name} = myProfile;
console.log(name); // undefined

// 디폴트값 설정
const {name2 = "아무개"} = myProfile;
console.log(name2); // 아무개

// 속성이 존재할 때는 해당 속성을 우선시함
const {age = 100} = myProfile;
console.log(age); // 24