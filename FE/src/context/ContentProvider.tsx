import React, {createContext, useEffect, useState} from "react";
import {getAnnouncement} from "../api/api";
import {Announcements} from "../types";

const ContentContext = createContext<any>({});

export const ContentProvider = ({children}: any) => {
    const [announcements, setAnnouncements] = useState<Announcements[]>([]);
    const [refreshAnnouncements, setRefreshAnnouncements] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const asyncProcess = async () => {
            try {
                const {status, data} = await getAnnouncement(signal);

                if (status === 200) {
                    setAnnouncements(data);
                    setRefreshAnnouncements(false);
                }
            } catch (err) {
                console.log(err)
            }
        }
        void asyncProcess();

        return () => controller.abort();
    }, [refreshAnnouncements]);

    return (
        <ContentContext.Provider value={{announcements, setRefreshAnnouncements}}>
            {children}
        </ContentContext.Provider>
    )
};

export default ContentContext;