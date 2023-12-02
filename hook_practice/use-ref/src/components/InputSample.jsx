import React, {useState, useRef} from "react";

export const InputSample = () => {
    // State
    const [inputs, setInputs] = useState({
        userName: "",
        userNickname: ""
    });

    // useRef()로 Ref 객체 생성
    const nameInput = useRef();

    const {userName, userNickname} = inputs;

    const onChange = (e) => {
        // input의 name 속성과 value 속성 값 추출
        const {name, value} = e.target; // e.target(object)의 value와 name 속성 분할대입으로 추출
        const newInputs = {
            ...inputs, // 기존의 inputs 객체를 복사
            [name]: value // e.target.name 속성의 값을 e.tartget.value로 대입
        }
        setInputs(newInputs);
    };

    const onReset = () => {
        // 출력 부분 초기화
        setInputs({
            userName: '',
            userNickname: ''
        });
        
        // focus 기능
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
            type="text" placeholder="이름" 
            name="userName" 
            onChange={onChange} 
            value={userName}
            ref={nameInput}
            />
            <input type="text" placeholder="닉네임" 
            name="userNickname" 
            onChange={onChange} 
            value={userNickname}
            />
            <button onClick={onReset}>초기화</button>

            <div>
                <b>값: </b>
                {userName} ({userNickname})
            </div>
        </div>
    );
};