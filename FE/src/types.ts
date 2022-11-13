import {Dispatch, SetStateAction} from "react";

export type UserRole = "MEMBER" | "EDITOR" | "ADMIN";

export type UserRoles = UserRole[];

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
    email: string;
    roles: string[];
}

export interface UserWithId extends User {
    id: number;
}

export interface userAuthContextProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}