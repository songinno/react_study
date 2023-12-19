import React from "react";
import {createGlobalStyle} from 'styled-components';
import { TodoTemplate } from "./TodoTemplate";
import { TodoHead } from "./TodoHead";
import { TodoList } from "./TodoList";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
            </TodoTemplate>
        </>
    )
};