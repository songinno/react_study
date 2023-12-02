import { log } from "console";
import { useCallback, useState } from "react";

// 메모 목록에 관한 사용자 정의 훅
export const useMemoList = () => {
    // 메모 목록 State
    const [memoList, setMemoList] = useState<string[]>([]);

    // 메모 추가 로직
    const addTodo = useCallback((text: string) => {
        // State 변경 정상 감지를 위한 신규 배열 생성
        const newMemos = [...memoList];
        // 텍스트 박스의 입력 내용을 메모 배열에 추가
        newMemos.push(text);
        // 메모 State 업데이트
        setMemoList(newMemos);
    }, [memoList]); // 의존 배열을 잊지 않도록 memoList 추가

    // 메모 삭제 로직
    const deleteTodo = useCallback((index: number) => {
        // State 변경 정상 감지를 위한 신규 배열 생성
        const newMemos = [...memoList];
        console.log(newMemos);
        // 메모 배열에서 해당 요소 삭제
        newMemos.splice(index, 1);
        setMemoList(newMemos);
    }, [memoList]);

    return {memoList, addTodo, deleteTodo};
};