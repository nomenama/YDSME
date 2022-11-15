import React, {createContext, useState} from "react";

const UserContext = createContext<any>({});

export const UserProvider = ({children}: any) => {
    const userFromSession = sessionStorage.getItem("user") || JSON.stringify({firstName: "", lastName: "", username: "", roles: []});
    const initialUser = JSON.parse(userFromSession);
    const [user, setUser] = useState(initialUser);

    const isMember = user?.roles.some((role: string) => role === "MEMBER");
    const isCommittee = user?.roles.some((role: string) => role === "COMMITTEE");
    const isEditor = user?.roles.some((role: string) => role === "EDITOR");
    const isAdmin = user?.roles.some((role: string) => role === "ADMIN");

    return (
        <UserContext.Provider value={{user, setUser, isMember, isCommittee, isEditor, isAdmin}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;