import api from "./baseApi";

export const postLogin = (username: string, password: string) => {
    return api.post("/user", {username, password})
};