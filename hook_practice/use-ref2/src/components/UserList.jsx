import React from "react";

const User = (props) => {
    const {user} = props;
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

export const UserList = props => {
    // console.log(props);
    const {users} = props;
    return (
        <div>
            {/* id를 key로 설정 */}
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
            
            {/* index를 key로 설정 */}
            {/* {users.map((user, index) => (
                <User user={user} key={index} />
            ))} */}

        </div>
    );
};

