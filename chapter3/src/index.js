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

