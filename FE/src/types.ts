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
    id: number | null;
}

export interface userAuthContextProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

export enum FORM_TYPE {
    "NEW_USER" = "New User",
    "MANAGE_USER" = "Manage User"
}

export interface LoadingProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setWhichForm: Dispatch<SetStateAction<string>>;
}