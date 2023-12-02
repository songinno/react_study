/* 깊은 값 비구조화 할당 */
const deepObj = {
    state: {
        information: {
            name: "velopert",
            languages: ["korean", "english", "chinese"]
        }
    },
    value: 5
};

// name, languages, value 값들을 밖으로 꺼내기
// 분할대입 2번 사용
// const {name: name2, languages} = deepObj.state.information;
// const {value} = deepObj;

// const extracted = {
//     name2,
//     languages,
//     value
// }

// console.log(extracted);
/* 
{
  name2: 'velopert',
  languages: [ 'korean', 'english', 'chinese' ],
  value: 5
}
*/

// 한 번에 모두 추출
const {
    state: {
        information: {name, languages}
    },
    value
} = deepObj;

const extraced = {
    name,
    languages,
    value
}
console.log(extraced);