/* 분할 대입 이용x */
// 객체
const myProfile = {
    name: "누시다",
    age: 24
};
console.log(`내 이름은 ${myProfile.name}이고, 나이는 ${myProfile.age} 입니다.`);

// 배열
const myProfile2 = ["누시다", 24];
const message = `내 이름은 ${myProfile2[0]}이고, 나이는 ${myProfile2[1]} 입니다.`;
console.log(message);

/* 분할 대입 */
// 객체 분할 대입
const {name, age} = myProfile;
console.log(`내 이름은 ${name}이고, 나이는 ${age} 입니다.`);

const {name: newName, age: newAge} = myProfile;
console.log(`내 이름은 ${newName}이고, 나이는 ${newAge} 입니다.`);

// 배열 분할 대입
const [myName, myAge] = myProfile2;
const message2 = `내 이름은 ${myName}이고, 나이는 ${myAge} 입니다.`;
console.log(message2);