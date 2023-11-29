export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string; // 생략 가능 속성
    hobbies?: string[]; // 생략 가능 속성
};