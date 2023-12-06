import React, { useCallback, useMemo, useRef, useState } from "react";
import { UserList } from "./components/UserList";
import { CreateUser } from "./components/CreateUser";

const countActiveUsers = (users) => {
    console.log("활성 사용자 숫자를 세는 중...");
    return users.filter(user => user.activate).length;
};

export const App = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const {username, email} = inputs;

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setInputs( inputs => ({ // 최신 inputs
            ...inputs,
            [name]: value
        }));
    }, []);

    // users도 State로 관리
    const [users, setUsers] = useState([
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
    ]);

    // useRef 사용
    // const nextId = useRef(users.length);
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        // 신규 유저 객체
        const newUser = {
            id: nextId.current,
            username,
            email
        };
        // users 배열에 항목을 추가 방법1 : 분할 대입 이용
        // setUsers([...users, newUser]);

        // users 배열에 항목을 추가 방법2 : concat() 함수 이용
        setUsers(users => // 최신 users
            users.concat(newUser));

        // input 초기화
        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    }, [username, email]);

    // 유저 삭제 
    const onRemove = useCallback((userId) => {
        /* filter 이용 */
        setUsers(users => // 최신 users
            users.map(user => 
                user.id === userId ? {...user, activate: !user.activate} : user
            )
        );

        /* findIndex + splice 이용 */
        // // 배열 깊은 복사(불변성 유지를 위함)
        // const newUsers = [...users];
        // // 삭제하려는 유저의 index
        // const targetIndex = newUsers.findIndex(user => user.id === userId);
        // // 배열 요소 삭제
        // newUsers.splice(targetIndex, 1);
        // // console.log(newUsers);
        // setUsers(newUsers);
    }, []);

    // 수정 토글
    const onToggle = useCallback((userId) => {
        setUsers(users => // 최신 users
            users.map(user =>
                 (user.id === userId) ? {...user, activate: !user.activate} : user
            )
        );
    }, []);

    const acitveUserCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {acitveUserCount}</div>
        </>
    );
};