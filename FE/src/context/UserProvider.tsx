import React, {createContext, useEffect, useState} from "react";
import {User} from "../types";

const UserContext = createContext<any>({});

export const UserProvider = ({children}: any) => {
    const userFromSession = sessionStorage.getItem("user") || JSON.stringify({firstName: "", lastName: "", username: "", roles: []});
    const initialUser = JSON.parse(userFromSession);
    const [user, setUser] = useState(initialUser);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;