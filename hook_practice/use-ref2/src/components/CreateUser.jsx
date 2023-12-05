import React from "react";

export const CreateUser = props => {
    const {username, email, onChange, onCreate} = props;
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
};
