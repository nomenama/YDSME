import React, {createContext, useState} from "react";
import {User, userAuthContextProps} from "../types";

const UserContext = createContext<any>({});

export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;