console.log("test");

/* DOM 요소(Element) 얻기 */
// id를 이용해서 얻기
// getElementById 사용
const title1 = document.getElementById("title");
console.log(title1);

// querySelector 사용
const title2 = document.querySelector("#title");
console.log(title2);

// 클래스명을 이용해서 얻기
// getElementsByClassName() 사용
const containers = document.getElementsByClassName("container");
console.log(containers);

// querySelector 사용
const container = document.querySelector(".container");
console.log(container); // 가장 처음 일치한 요소를 반환

// querySelectorAll 사용
const containers2 = document.querySelectorAll(".container");
console.log(containers2);

console.log("----------------------------");


/* 버튼 설정 */
// button 태그 생성
const buttonEl = document.createElement("button");

// 버튼 라벨 설정
buttonEl.textContent = "버튼";

// 영역 1의 div 태그 얻기
const div1El = document.querySelector(".container");
console.log(div1El);

// div 태그 아래 button 태그 추가
div1El.appendChild(buttonEl);

/* h1 태그 삭제 */

// h1 태그 요소 얻기
const h1El = document.getElementById("title");

// body 태그 얻기
const bodyEl = document.querySelector("body");

// body 태그 아래부터 h1 태그 삭제
// bodyEl.removeChild(h1El);

// body 태그 아래부터 모두 삭제
bodyEl.textContent = null;
