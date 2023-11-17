const name = "누시다";
const age = 24;

// user 객체 정의
const user = {
    name: name,
    age: age
};

console.log(user); // { name: '누시다', age: 24 }

// 객체 생략 표기법 적용
const user2 = {
    name,
    age,
};
console.log(user2); // { name: '누시다', age: 24 }