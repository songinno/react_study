import React, { useMemo } from "react";
import { UserList } from "./components/UserList";
import { CreateUser } from "./components/CreateUser";
import { useReducer } from "react";
import {produce} from 'immer';
import { useState } from "react";

const countActiveUsers = (users) => {
    console.log("활성 사용자 숫자를 세는 중...");
    return users.filter(user => user.activate).length;
};


const initialState = {
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
        case 'CREATE_USER':
            return produce(state, draft => {
                    draft.users.push(action.newUser);
            });
        case 'CHANGE_ACTIVATE':

            return produce(state, draft => {
                const targetUser = draft.users.find(user => action.userId === user.id);
                targetUser.activate = !targetUser.activate;
            });

        case 'REMOVE_USER':
            return produce(state, draft => {
                const targetUserIndex = draft.users.findIndex(user => action.userId === user.id);
                draft.users.splice(targetUserIndex, 1);
            });
        default:
            return state;
    }
};

// UserDispatch라는 Context를 생성하고, 어디서든지 사용할 수 있도록 export
export const UserDispatch = React.createContext(null);

export const App = () => {
    
    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

   

    // State에 필요한 값 추출
    const { users } = state;


    // 활성 사용자 수
    const activateCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <UserList
                users={users}
            />
            <div>활성 사용자 수: {activateCount}</div>
        </UserDispatch.Provider>
    );
};