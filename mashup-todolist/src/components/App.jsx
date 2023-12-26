import React from "react";
import {createGlobalStyle} from 'styled-components';
import { TodoTemplate } from "./TodoTemplate";
import { TodoHead } from "./TodoHead";
import { TodoList } from "./TodoList";
import { TodoCreate } from "./TodoCreate";
import { TodoProvider } from "../context/TodoContext";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

export const App = () => {
    return (
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    )
};