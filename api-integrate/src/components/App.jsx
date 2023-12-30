import React from "react";
import { Users } from "./Users";
import { UsersProvider } from "../context/UsersContext";

export const App = () => {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
};