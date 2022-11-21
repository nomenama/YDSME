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
    uploadPreset: "Club_Rules" | "Committee" | "Newsletters" | "Boiler_guides" | "Minutes" | "Agendas";
    onModalClose?: () => void;
}

export interface MediaProps extends UploadWidgetProps {
    title: string;
    file: string; //base64
}

export interface MediaWithUrl {
    asset_id: string;
    created: string;
    folder: string;
    id: number,
    public_id: string;
    secure_url: string;
    signature: string;
    title: string;
}