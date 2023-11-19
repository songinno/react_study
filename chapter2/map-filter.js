/* map */

// 기존 for문
const arr1 = ["누시다", "사키오카", "고토"];

for (let i=0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// map
const arr2 = arr1.map((name) => {return name});
console.log(arr2); // [ '누시다', '사키오카', '고토' ]

arr1.map((name) => console.log(name));

console.log("=============");
// filter
const arr3 = [1,2,3,4,5];

const arr4 = arr3.filter((num) => {
    return num % 2 === 1;
});
console.log(arr4);

const arr5 = arr3.filter((i) => (i % 2 !== 0));
console.log(arr5);

// index handling
const nameArr = ["누시다", "사키오카", "고토"];

nameArr.map((name, idx) => console.log(`${name}의 인덱스는 ${idx}입니다.`));

console.log("=============");
/* 예제 */
const newNameArr = nameArr.map((name) => {
    if (name === "누시다") return name;
    else return `${name}님`;
});
console.log(newNameArr); // [ '누시다', '사키오카님', '고토님' ]
