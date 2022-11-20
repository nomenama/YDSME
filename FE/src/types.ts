import {Dispatch, SetStateAction} from "react";
import {strict} from "assert";

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

export interface NewAnnouncement {
    title: string;
    content: string;
}

export interface Announcements extends NewAnnouncement {
    id: number;
    created: string;
}

export interface NewEvent {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    time: string;
    audience?: string;
}

export interface CalendarEvent extends NewEvent {
    id: number;
}

export interface UploadWidgetProps {
    uploadPreset: "club_rules" | "committee" | "newsletter" | "boiler_guide" | "minute" | "agenda";
    databaseTable: "rules" | "committee" | "newsletter" | "boiler_guide" | "minute" | "agenda";
}

export interface MediaMetadataObj {
    title: string;
    url: string;
    databaseTable: "rules" | "committee" | "newsletter" | "boiler_guide" | "minute" | "agenda";
}