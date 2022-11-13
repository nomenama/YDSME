import api from "./baseApi";
import {User} from "../types";

export const postLogin = (username: string, password: string) => {
    return api.post("/user", {username, password}, {withCredentials: true})
};

export const createUser = async (user: User) => {
    const rawResponse = await api.post("/user/create-user", user, {withCredentials: true});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};

export const getUser = async (name: User["firstName"]) => {
    const rawResponse = await api.get(`/user/get-user`, {params: {name}, withCredentials: true});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};

export const deleteUser = async (userId: number) => {
    const rawResponse = await api.delete(`/user/delete-user/${userId}`, {withCredentials: true});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};