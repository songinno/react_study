import React, {memo, useCallback, useRef} from "react";
import { useInputs } from "../hooks/useInputs";
import { UserDispatch } from "../App";
import { useContext } from "react";


export const CreateUser = memo(() => {
     // useRef - 특정 값 관리
     const nextId = useRef(4);

    // useInputs (커스텀 Hooks)
    const initialInputs = {
        username: '',
        email: ''
    };

    const [form, onChange, reset] = useInputs(initialInputs);
    
    const {username, email} = form;

    // Context API
    const dispatch = useContext(UserDispatch);

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

        reset(); // input 값 초기화

        nextId.current += 1;
    }, [username, email, reset]); // reset 함수도 useCallback의 의존 배열에 추가

    // console.log("CreateUser 컴포넌트 렌더링");
    return (
        <div>
            <input 
                type="text" placeholder="계정명"
                name="username"
                onChange={onChange}
                value={username}
            />
            <input 
                type="text" placeholder="이메일"
                name="email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
});
