import React from "react";
import styled from 'styled-components';
import { useTodoState } from "../context/TodoContext";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0px;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

export const TodoHead = () => {
    const todos = useTodoState();
    const undoTodos = todos.filter(todo => !todo.done);

    const today = new Date();
    // console.log("today: "+ today);
    // today: Fri Dec 22 2023 20:13:09 GMT+0900 (한국 표준시)

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    // console.log("dateString: " + dateString);
    // dateString: 2023년 12월 22일

    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    // console.log("dayName: " + dayName);
    // dayName: 금요일


    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">남은 할 일 : {undoTodos.length}개</div>
        </TodoHeadBlock>
    );
};