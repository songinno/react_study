import React, {memo} from "react";

export const CreateUser = memo(props => {
    const {username, email, onChange, onCreate} = props;
    console.log("CreateUser 컴포넌트 렌더링");
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
