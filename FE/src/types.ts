export interface User {
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
    roles: number[];
}

export interface UserWithId extends User {
    id: number;
}