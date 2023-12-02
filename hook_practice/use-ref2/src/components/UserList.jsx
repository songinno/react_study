import React from "react";

const User = ({user}) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

export const UserList = () => {
    const users = [
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
    ];

    return (
        <div>
            {/* id를 key로 설정 */}
            {/* {users.map(user => (
                <User user={user} key={user.id} />
            ))} */}
            
            {/* index를 key로 설정 */}
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}

        </div>
    );
};

