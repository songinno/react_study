/* 객체에서의 rest */
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

/* 배열에서의 rest */

const {color, ...rest} = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // { name: '슬라임', attribute: 'cute' }

const numbers = [0, 1, 2, 3, 4, 5, 6];
const [first, second, ...rest2] = numbers;
console.log(first); // 0
console.log(second); // 1
console.log(rest2); // [ 2, 3, 4, 5, 6 ]

/* 함수 매개변수에서의 rest */
function sum(a,b,c,d,e,f) {
    let total = 0;
    if (a) total += a;
    if (b) total += b;
    if (c) total += c;
    if (d) total += d;
    if (e) total += e;
    if (f) total += f;
    return total;
}

const sumResult = sum(1,2,3,4,5);
console.log(sumResult);

function sum2(...rest) {
    let total = 0;
    console.log(rest);
    rest.forEach(e => {
        total += e;
    });
    return total;
}

const sum2Result = sum2(1,2,3,4,5);
console.log(sum2Result);