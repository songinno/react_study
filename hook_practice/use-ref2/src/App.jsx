import React, { useRef, useState } from "react";
import { UserList } from "./components/UserList";
import { CreateUser } from "./components/CreateUser";

export const App = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const {username, email} = inputs;

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // users도 State로 관리
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    // useRef 사용
    // const nextId = useRef(users.length);
    const nextId = useRef(4);

    const onCreate = () => {
        // 신규 유저 객체
        const newUser = {
            id: nextId.current,
            username,
            email
        };
        // users 배열에 항목을 추가1 : 분할 대입 이용
        // setUsers([...users, newUser]);
        // users 배열에 항목을 추가2 : concat() 함수 이용
        setUsers(users.concat(newUser));

        // input 초기화
        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
        </>
    );
};