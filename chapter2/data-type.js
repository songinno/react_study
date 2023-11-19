/* typeof 연산자로 null 확인 */
console.log(typeof null); // object

/* Nan 자기 자신과 비교 */
const a = Number("hihi");
console.log(a); // Nan

console.log(a === a); // false
console.log(a == a); // false

console.log("===================");
/* BigInt 생성 */
const bigInt1 = 12345n;

const bigInt2 = BigInt(12345);

console.log(bigInt1); // 12345n
console.log(bigInt2); // 12345n

console.log("===================");
/* ?? 연산자(nullish 병합 연산자) */
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0