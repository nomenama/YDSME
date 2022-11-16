import React, {createContext, useEffect, useState} from "react";
import {getAnnouncement} from "../api/api";
import {Announcements} from "../types";

const ContentContext = createContext<any>({});

export const ContentProvider = ({children}: any) => {
    const [announcements, setAnnouncements] = useState<Announcements[]>([]);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const asyncProcess = async () => {
            try {
                const {status, data} = await getAnnouncement(signal);

                if (status === 200) {
                    setAnnouncements(data);
                }
            } catch (err) {
                console.log(err)
            }
        }
        void asyncProcess();

        return () => controller.abort();
    }, []);

    return (
        <ContentContext.Provider value={{announcements, setAnnouncements}}>
            {children}
        </ContentContext.Provider>
    )
};

export default ContentContext;