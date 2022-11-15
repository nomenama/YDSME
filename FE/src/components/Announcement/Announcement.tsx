import React from "react";
import Marquee from "react-fast-marquee";
import {AnnouncementContainer, Span} from "./Announcement.styles";
import useContent from "../../hooks/useContent";
import {P1} from "common/index.styles";

const Announcement = () => {
    const {announcements} = useContent();

    return (
        <Marquee speed={60} gradient={false} pauseOnHover={true} delay={1}>
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