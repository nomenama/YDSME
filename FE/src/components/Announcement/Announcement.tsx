import React from "react";
import Marquee from "react-fast-marquee";
import {AnnouncementContainer, Span} from "./Announcement.styles";
import useContent from "../../hooks/useContent";

const Announcement = () => {
    const {announcements} = useContent();

    return (
        <Marquee gradient={false} pauseOnHover={true}>
            {announcements.map(({id, content}: any) => {
                return (
                    <AnnouncementContainer key={id}>
                        <Span>{content}</Span>
                    </AnnouncementContainer>
                )
            })}
        </Marquee>
    )
}

export default Announcement;