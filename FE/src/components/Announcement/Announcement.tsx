import React, {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";
import {AnnouncementContainer, Span} from "./Announcement.styles";
import {getAnnouncement} from "../../api/api";

const Announcement = () => {
    const [announcements, setAnnouncements] = useState<string[]>([]);

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
    }, [])

    return (
        <Marquee speed={60} gradient={false} pauseOnHover={true} delay={1}>
            {announcements.map((announcement, index) => {
                return (
                    <AnnouncementContainer key={announcement + index}>
                        <Span>{announcement}</Span>
                    </AnnouncementContainer>
                )
            })}
        </Marquee>
    )
}

export default Announcement;