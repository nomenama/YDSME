import api from "./baseApi";
import {MediaMetadataObj, NewAnnouncement, NewEvent, User, UserWithId} from "../types";

export const postLogin = async (username: string, password: string) => {
    const {status, data} = await api.post("/user", {username, password}, {withCredentials: true});

    return {
        status,
        data
    }
};

export const logout = async () => {
    return await api.post("/user/logout", {}, {withCredentials: true});
};

export const deleteEvent = async (id: number) => {
    const rawResponse = await api.post("/public/delete-event", {id}, {withCredentials: true});
    const {status, data} = rawResponse;

    return {
        status,
        data
    }
};

export const createEvent = async (eventObj: NewEvent) => {
    const rawResponse = await api.post("/public/create-event", eventObj, {withCredentials: true});
    const {status, data} = rawResponse;

    return {
        status,
        data
    }
};

export const deleteAnnouncement = async (id: number) => {
    const rawResponse = await api.post("/public/delete-announcement", {id}, {withCredentials: true});
    const {status, data} = rawResponse;

    return {
        status,
        data
    }
};

export const createAnnouncement = async (newAnnouncementObj: NewAnnouncement) => {
    const rawResponse = await api.post("/public/create-announcement", newAnnouncementObj, {withCredentials: true});
    const {status, data} = rawResponse;

    return {
        status,
        data
    }
};


/*admin routes*/
export const createUser = async (user: User) => {
    const rawResponse = await api.post("/user/create-user", user, {withCredentials: true});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};

export const updateUser = async (user: UserWithId) => {
    const rawResponse = await api.put("/user/update-user", user, {withCredentials: true});
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


/*public routes*/
export const getAnnouncement = async (signal: AbortSignal) => {
    const rawResponse = await api.get(`/public/announcements`, {signal});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};

export const getEvents = async (signal: AbortSignal) => {
    const rawResponse = await api.get(`/public/get-events`, {signal});
    const {data, status} = rawResponse;

    return {
        data,
        status
    }
};

export const getMediaMetadata = async (databaseTable: string, signal?: AbortSignal) => {
    const {status, data} = await api.get("/media/get-metadata", {withCredentials: true, params: {databaseTable}, signal});

    return {
        status,
        data
    }
}

export const postMediaMetadata = async (mediaObj: MediaMetadataObj) => {
    const {status, data} = await api.post("/media/post-metadata", mediaObj, {withCredentials: true});

    return {
        status,
        data
    }
};