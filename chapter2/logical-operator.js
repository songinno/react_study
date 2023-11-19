/* || */
const num = null;
const fee = num || "금액을 설정하지 않았습니다.";
console.log(fee); // 금액을 설정하지 않았습니다.

const num2 = 100;
const fee2 = num2 || "금액을 설정하지 않았습니다.";
console.log(fee2); // 100

const fee3 = null || undefined;
console.log(fee3);

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log("둘 중 어느 하나는 true입니다."); // 둘 중 어느 하나는 true입니다.
}

const flag3 = false;
const flag4 = false;

if (flag3 || flag4) {
    console.log("둘 중 어느 하나는 true입니다."); // 출력 결과 없음
}

console.log("=================");
/* && */
const fee4 = 100 && "무언가가 설정되었습니다.";
console.log(fee4);

const fee5 = null && "무언가가 설정되었습니다.";
console.log(fee5);

