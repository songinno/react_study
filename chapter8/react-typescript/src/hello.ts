let anything: any = true;
console.log(anything);

anything = "hello";
console.log(anything);

anything = 12345;
console.log(anything);

function nothing(): void {
  console.log("nothing 함수 호출!");
}

nothing();

// function alwaysThrow(): never {
//     throw new Error("I`m a wicked function!");
// }

// alwaysThrow();

// 튜플
const nameAndHeight: [string, number] = ["안희종", 176];
nameAndHeight.push(42);
console.log(nameAndHeight);

// 객체
const userWithUnknownHeight: { name: string; height?: number } = {
  name: "김수한무",
};
console.log(userWithUnknownHeight);

type UUID = string;

function getUser(uuid: UUID) {
  console.log(uuid);
}

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 5));

function returnTwo(): number {
  return 2;
}
const onePlusOne2: () => number = returnTwo;

const onePlusOne: () => number = () => 2;

let sumTwoNumber: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

let sumTwoNumber2: (a: number, b: number) => number = (a, b) => a + b;

// number 타입의 매개 변수 2개를 받아서 number 타입을 리턴하는 함수 타입 정의
type SumFunction = (a: number, b: number) => number;

// 위에 정의한 함수 타입의 변수 정의
const definitelySum: SumFunction = (a, b) => a + b;

function greetings(name: string = "stranger"): void {
  console.log(`hello, ${name}`);
}

greetings(); // hello, stranger


function sendMessage(message: string, userName?: string): void {
    console.log(`message: ${message}, userName: ${userName}`);
}

sendMessage("안녕하세요", "안재모"); // message: 안녕하세요, userName: 안재모
sendMessage("안녕하세요"); // message: 안녕하세요, userName: undefined

function sendMessage2(message: string, userName?: string, userAge?: number, userAddr?: string): void {
    console.log(`${message}, ${userName}, ${userAge}, ${userAddr}`);
}

sendMessage2("안녕하세요", "안재모");

/* 함수 오버로딩 */
function doubleString(str: string): string {
    return `${str}${str}`;
}
function doubleNumber(num: number): number {
    return (num * 2);
}
function doubleBooleanArray(arr: boolean[]): boolean[] {
    return arr.concat(arr);
}

// double이라는 함수 하나로 합치기
function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];

function double(arg: any) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`;
    } else if (typeof arg === 'number') {
        return arg * 2;
    } else if (Array.isArray(arg)) {
        return arg.concat(arg);
    }
}

const num = double(3); // number
const str = double('ab'); // string
const arr = double([true, false]); // boolean[]

console.log(num);
console.log(str);
console.log(arr);

function aaa(a: number, b: number) {
    console.log(a + b);
}

/* Union 타입 */
let val1: string | number;
val1 = "hihi";
val1 = 1234;
// val1 = true;

type WhatEver = string | number;
let val2: WhatEver;
val2 = "hihi";
val2 = 1234;
// val2 = true;

function square(value: number, returnString: boolean): number | string {
    const squared: number = value * value;
    if (returnString) {
        return squared.toString();
    }
    return squared;
}

console.log(typeof square(12, true));
console.log(typeof square(12, false));

/* Intersection 타입 */
const obj: {str: string} & {num: number} = {
    str: "A",
    num: 100
};

// 개요
// 프로그래머를 나타내는 타입
type Programmer = {favoriteLanguage: string};
const programmer: Programmer = {favoriteLanguage: "TypeScript"};

// 맥주를 좋아하는 사람의 타입
type BeerLover = {favoriteBeer: string};
const beerLover: BeerLover = {favoriteBeer: "Imperial Stout"};

// 맥주를 좋아하는 프로그래머의 타입
// 1. 모두 작성
type BeerLovingProgrammer = {favoriteLanguage: string; favoriteBeer: string};
const blp: BeerLovingProgrammer = {
    favoriteLanguage: "TypeScript",
    favoriteBeer: "Imperial Stout"
};
// 변화에 취약.
// Programmer 타입에 속성 추가 시, 모든 BeerLovingProgrammer 타입을 찾아서 추가해줘야함

// 2. Intersection Type 이용
type BeerLovingProgrammer2 = Programmer & BeerLover;
const blp2: BeerLovingProgrammer2 = {
    favoriteLanguage: "TypeScript",
    favoriteBeer: "Imperial Stout"
};

type TypeA = {
    str: string,
    num: number
};

type TypeB = {
    str: string,
    num: number
};

type TypeAB = TypeA & TypeB;
const ab: TypeAB = {
    str: "hihihi",
    num: 12345
}; 

console.log(ab); // { str: 'hihihi', num: 12345 }


// 어떤 값도 만족하지 않는 인터섹션 타입
let infeasible: string & number;


/* Generic */
type CustomType<T> = {
    val: T;
};

const strObj: CustomType<string> = {val: "A"};