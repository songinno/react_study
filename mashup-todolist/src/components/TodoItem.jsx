import React from "react";
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    /* Remove 컴포넌트 호버 시, 글자 색상(color) 변화 */
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    /* TodoItemBlock 컴포넌트 호버 시, Remove 컴포넌트 나타나게 하기 */
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    /* props에 따른 조건부 스타일링 */
    ${
        props =>
            props.done &&
            css`
                border: 1px solid #38d9a9;
                color: #38d9a9;
            `
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    /* props에 따른 조건부 스타일링 */
    ${
        props =>
            props.done &&
            css`
                color: #ced4da;   
            `
    }
`;

export const TodoItem = props => {
    const {id, done, text} = props;
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
};


