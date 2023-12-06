import React, { memo, useEffect } from "react";



const User = memo(props => {
    const {user, onRemove, onToggle} = props;

    /* useEffect */

    // useEffect(() => {
    //     // console.log("컴포넌트가 화면에 나타남");
    //     console.log('user 값이 설정됨');
    //     console.log(user);
    //     return () => {
    //         // console.log("컴포넌트가 화면에서 사라짐");
    //       console.log('user가 바뀌기 전...');
    //       console.log(user);
    //     };
    // }, []);

    useEffect(() => {
        // console.log(user);
    }, []);

    /* style */
    const activateStyle = {
        cursor: 'pointer',
        color: user.activate ? 'green' : 'black'
    };

    return (
        <div>
            <b style={activateStyle} onClick={() => onToggle(user.id)}>{user.username}</b>
            &nbsp; {/* 줄바꿈을 일으키지 않는 공백 */}
            <span>({user.email})</span>
            {/* 삭제 버튼 */}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

export const UserList = memo(props => {
    // console.log(props);
    const {users, onRemove, onToggle} = props;
    return (
        <div>
            {/* id를 key로 설정 */}
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
            
            {/* index를 key로 설정 */}
            {/* {users.map((user, index) => (
                <User user={user} key={index} />
            ))} */}

        </div>
    );
});

