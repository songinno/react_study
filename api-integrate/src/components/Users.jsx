import React, {useState} from "react";
import { useUsersState, useUsersDispatch, getUsers } from "../context/UsersContext";
import { User } from "./User";

export const Users = () => {
    const [userId, setUserId] = useState(null);

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {data: users, loading, error} = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    };
    

    if (loading) return <div>Loading...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return <button onClick={fetchData}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>

    );
};