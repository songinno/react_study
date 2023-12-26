import React, {useReducer} from "react";
import { useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = props => {
    const {children} = props;

    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export const useTodoState = () => {
    const state = useContext(TodoStateContext);
    if (!state) {
        throw new Error('Cannot find TodoProvider');
    }
    return state;
};

export const useTodoDispatch = () => {
    const dispatch =  useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('Cannot find TodoProvider');
    return dispatch;
};

export const useTodoNextId = () => {
    const nextId = useContext(TodoNextIdContext);
    if (!nextId) throw new Error('Cannot find TodoProvider');
    return nextId;
};