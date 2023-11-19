const val1 = 1 > 0 ? "true입니다." : "false입니다.";
console.log(val1);

// 수치를 변환해 출력하는 함수
const printFormattedNum = (num) => {
    const formattedNum = (typeof num === "number" ? num.toLocaleString() : "숫자를 입력해주세요.");
    console.log(formattedNum);
};

printFormattedNum(1300); // 1,300
printFormattedNum("1300"); // 숫자를 입력해주세요.

console.log("==============");
// 두 인수의 합이 100을 넘는지 판정하는 함수
const checkSumOver100 = (num1, num2) => {
    return (num1 + num2) > 100 ? "100을 넘었습니다!" : "허용 범위 이내입니다.";
}
console.log(checkSumOver100(40, 50)); // 허용 범위 이내입니다.
console.log(checkSumOver100(90, 50)); // 100을 넘었습니다!
