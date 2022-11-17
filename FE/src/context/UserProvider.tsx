import React, {createContext, useEffect, useState} from "react";

const UserContext = createContext<any>({});

export const UserProvider = ({children}: any) => {
    const initialState = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        roles: []
    }

    const userFromSession = sessionStorage.getItem("user")
        || JSON.stringify(initialState);
    const initialUser = JSON.parse(userFromSession);
    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        if (user?.roles?.length) {
            sessionStorage.setItem("user", JSON.stringify(user));
        } else {
            sessionStorage.clear();
        }
    }, [user])

    const isMember = user?.roles?.some((role: string) => role === "MEMBER");
    const isCommittee = user?.roles?.some((role: string) => role === "COMMITTEE");
    const isEditor = user?.roles?.some((role: string) => role === "EDITOR");
    const isAdmin = user?.roles?.some((role: string) => role === "ADMIN");

    const isLoggedIn = isMember || isCommittee || isEditor || isAdmin;

    return (
        <UserContext.Provider value={{user, setUser, isMember, isCommittee, isEditor, isAdmin, isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;