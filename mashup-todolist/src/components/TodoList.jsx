import React from "react";
import styled from 'styled-components';
import { TodoItem } from "./TodoItem";
import { useTodoState } from "../context/TodoContext";


const TodoListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 영역 모두 채우기 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

    /* 확인용 임시 스타일 */
    /* background: gray;  */
`;

export const TodoList = () => {
    const todos = useTodoState();
    // console.log(todos);
    
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    $done={(todo.done)}
                />
            ))}
        </TodoListBlock>
    );
};