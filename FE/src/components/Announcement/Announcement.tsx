import React from "react";
import Marquee from "react-fast-marquee";
import {AnnouncementContainer, Span} from "./Announcement.styles";
import useContent from "../../hooks/useContent";

const Announcement = () => {
    const {announcements} = useContent();

    return (
        <Marquee speed={60} gradient={false} pauseOnHover={true} delay={1}>
            {announcements.map((announcement: any, index: any) => {
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