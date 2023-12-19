import React from "react";
import styled from 'styled-components';
import { TodoItem } from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 영역 모두 채우기 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

    /* 확인용 임시 스타일 */
    /* background: gray;  */
`;

export const TodoList = () => {
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링하기" done={true} />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="기능 구현하기" done={false} />
        </TodoListBlock>
    );
};