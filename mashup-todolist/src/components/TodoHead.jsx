import React from "react";
import styled from 'styled-components';

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
    return (
        <TodoHeadBlock>
            <h1>2023년 12월 16일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">남은 할 일 : 2개</div>
        </TodoHeadBlock>
    );
};