import React, {useEffect} from "react";
import { useUsersState, useUsersDispatch, getUser } from "../context/UsersContext";

export const User = props => {
    const { id } = props;

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
        getUser(id, dispatch);
    }, [dispatch, id]);

    const {data: user, loading, error} = state.user;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
};