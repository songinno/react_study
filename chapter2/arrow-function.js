// 기존 함수 예시1
function func1(value) {
    return value;
}

console.log(func1("func1입니다."));

// 기존 함수 예시2
const func2 = function (value) {
    return value;
}

console.log(func2("func2입니다."));


/* 화살표 함수 */

const func3 = (value) => {
    return value;
}

console.log(func3("func3입니다."));

// 인수가 한 개인 경우 -> 소괄호 생략 가능
const func4 = value => {
    return value;
}

console.log(func4("func4입니다."));

// 처리를 한 행으로 반환하는 경우 -> 중괄호, return 생략
const func5 = value => value;
console.log(func5("func5입니다."));

const func6 = (num1, num2) => num1 + num2;
console.log(func6(5, 10));

// 반환 값이 여러 행일 경우, ()로 감싸서 단일 행으로 반환 가능 -> 중괄호와 return 생략
const func7 = (val1, val2) => (
    { 
        name: val1, 
        age: val2 
    }
)

console.log(func7("홍길동", 500));

// 원래는
const func8 = (val1, val2) => {
    return {
        name: val1,
        age: val2
    }
}
console.log(func8("김두한", 200));
