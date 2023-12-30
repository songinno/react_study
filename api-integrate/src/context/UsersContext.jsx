import React, { createContext, useReducer, useContext } from "react";
import {createAsyncDispatcher, createAsyncHandler, initialAsyncState} from "../util/asyncActionUtils";
import * as api from '../api/api';

/* Context 준비 */;

// UsersContext에서 사용할 기본 상태
const initialStates = {
    users: initialAsyncState,
    user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// reducer 작성
const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
};


// State용 Context, Dispatch용 Context 각각 생성
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 두 Context들의 Provider로 감싸주는 컴포넌트 생성
export const UsersProvider = props => {
    const { children } = props;

    const [state, dispatch] = useReducer(usersReducer, initialStates);

    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
};

// State를 쉽게 조회할 수 있게 해주는 커스텀 Hook
export const useUsersState = () => {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Cannot find UsersProvider');
    }
    return state;
};

// Dispatch를 쉽게 사용할 수 있게 해주는 커스텀 Hook
export const useUsersDispatch = () => {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
};

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);