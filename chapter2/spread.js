/* 요소 전개 */
const arr1 = [1,2];
console.log(arr1); // [ 1, 2 ]

// 스프레드 구문
console.log(...arr1); // 1 2


console.log("=============");
// 일반적으로 배열 값을 인수로 전달하는 경우
const summaryFunc = (num1, num2) => console.log(num1 + num2);
summaryFunc(arr1[0], arr1[1]);

// 스프레드 구문 이용
summaryFunc(...arr1);

console.log("=============");
/* 요소 모으기 */
const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3] = arr2; // 분할 대입 시, 남은 요소를 모음
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [ 3, 4, 5 ]
console.log(arr3[0]) // 3
console.log(arr3[1]) // 4
console.log(arr3[2]) // 5
// 모은 요소들을 다시 전개
console.log(...arr3); // 3 4 5

console.log("=============");
/* 요소 복사와 결합 */
const arr4 = [10, 20];
const arr5 = [30, 40];

// 스프레드 구문을 이용해 배열 복사 -> 새로운 배열 생성
const arr6 = [...arr4];
console.log(arr4); // [ 10, 20 ]
console.log(arr6); // [ 10, 20 ]

// 스프레드 구문을 이용한 배열 결합 -> 새로운 배열 생성
const arr7 = [...arr4, ...arr5];
console.log(arr7); // [ 10, 20, 30, 40 ]

console.log("=============");
// 객체 복사 및 결합
const obj1 = {val1 : 10, val2: 20};
const obj2 = {val3: 30, val4: 40};

// 스프레드 구문을 이용한 객체 복사
const obj3 = {...obj1};
console.log(obj3); // { val1: 10, val2: 20 }
// 스프레드 구문을 이용한 객체 결합
const obj4 = {...obj1, ...obj2};
console.log(obj4); // { val1: 10, val2: 20, val3: 30, val4: 40 }

console.log("=============");
// 등호를 이용한 복사 문제점
const arr8 = arr4;
console.log(arr8); // [ 10, 20 ]

arr8[0] = 10000;
console.log(arr8); // [ 10000, 20 ]
console.log(arr4); // [ 10000, 20 ]