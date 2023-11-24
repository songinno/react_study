import React, { useEffect } from "react";


function User({user, onRemove, onToggle}) {
    const bStyle = {
        cursor: "pointer",
        color: user.active ? "green" : "black"
    };

    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        }
    }, []);

    return (
        <div>
            <b style={bStyle} onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
            <User
                user={user}
                key={user.id}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        ))}
        </div>
    );
}