import React, { memo, useEffect, useContext } from "react";
import { UserDispatch } from "../App";

const User = memo(props => {
    const {user} = props;

    // Context API - useContext Hook
    const dispatch = useContext(UserDispatch);

    /* style */
    const activateStyle = {
        cursor: 'pointer',
        color: user.activate ? 'green' : 'black'
    };

    return (
        <div>
            <b style={activateStyle} onClick={() => {
                dispatch({
                    type: 'CHANGE_ACTIVATE',
                    userId: user.id
                });
            }}>
                {user.username}
            </b>
            &nbsp; {/* 줄바꿈을 일으키지 않는 공백 */}
            <span>({user.email})</span>
            {/* 삭제 버튼 */}
            <button onClick={() => {
                dispatch({
                    type: 'REMOVE_USER',
                    userId: user.id
                });
            }}>
                삭제
            </button>
        </div>
    );
});

export const UserList = memo(props => {
    // console.log(props);
    const {users} = props;
    return (
        <div>
            {/* id를 key로 설정 */}
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
            
        </div>
    );
});

