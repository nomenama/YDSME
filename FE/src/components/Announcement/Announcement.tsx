import React from "react";
import Marquee from "react-fast-marquee";
import {AnnouncementContainer, Span} from "./Announcement.styles";

const Announcement = () => {
    const announcements = ["Welcome to York District Society of Model Engineering - Follow us on Facebook for latest updates", "Don't miss out Christmas Day celebration. Open to public. Book now!"]

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