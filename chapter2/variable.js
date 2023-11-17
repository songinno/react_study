var val1 = "var 변수";
console.log(val1); // var 변수

// 변수 덮어 쓰기 가능
val1 = "var 변수 덮어 쓰기";
console.log(val1); // var 변수 덮어 쓰기

// var 변수 재선언 가능
var val1 = "var 변수를 재선언";
console.log(val1); // var 변수 재선언

console.log("-----------------------");

/* const로 정의한 변수를 변경할 수 있는 경우 */
// 객체 속성값 변경 및 추가

// 객체 정의
const obj1 = {
    name: "누시다",
    age: "24"
};
console.log(obj1);

// 속성값 변경
obj1['name'] = "Nushida1";
console.log(obj1);
obj1.name = "Nushida2";
console.log(obj1);

// 속성 추가
obj1.address = "Tokyo";
obj1['email'] = "abc@naver.com";
console.log(obj1);

console.log("-----------------------");
// 배열값 변경, 추가

// 배열 정의
const arr1 = ["dog", "cat"];
console.log(arr1);

// 첫 번째 값 변경
arr1[0] = "pig";
console.log(arr1);

// 값 추가
arr1.push("monkey");
console.log(arr1);