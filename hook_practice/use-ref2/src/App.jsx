import React, { useCallback, useMemo, useRef, useState } from "react";
import { UserList } from "./components/UserList";
import { CreateUser } from "./components/CreateUser";
import { useReducer } from "react";

const countActiveUsers = (users) => {
    console.log("활성 사용자 숫자를 세는 중...");
    return users.filter(user => user.activate).length;
};

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            activate: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            activate: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            activate: false
        }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }

        case 'CREATE_USER':
            return {
                // ...state, // 속성이 inputs와 users 밖에 없어서, 복사해도 그만 안해도 그만
                inputs: initialState.inputs, // input 초기화
                users: state.users.concat(action.newUser)
            }
        case 'CHANGE_ACTIVATE':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId ? { ...user, activate: !user.activate } : user
                )
            };

        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            }
        default:
            return state;
    }
};

export const App = () => {
    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    // State에 필요한 값 추출
    const { username, email } = state.inputs;
    const { users } = state;

    // onChange
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    // onCreate
    const onCreate = useCallback(() => {
        const newUser = {
            id: nextId.current,
            username: username,
            email: email
        };

        dispatch({
            type: 'CREATE_USER',
            newUser: newUser
        });

        nextId.current += 1;
    }, [username, email]);

    // onToggle
    const onToggle = useCallback(userId => {
        dispatch({
            type: 'CHANGE_ACTIVATE',
            userId: userId
        });
    }, []);

    // onRemove
    const onRemove = useCallback(userId => {
        dispatch({
            type: 'REMOVE_USER',
            userId: userId
        });
    }, []);

    // 활성 사용자 수
    const activateCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            <div>활성 사용자 수: {activateCount}</div>
        </>
    );
};