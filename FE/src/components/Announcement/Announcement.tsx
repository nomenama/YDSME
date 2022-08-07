import React from "react";
import {Container, Marquee, Span} from "./Announcement.styles";

const Announcement = () => {
    const announcements = ["Welcome to York District Society of Model Engineering", "Follow us on Facebook for the latest updates"]

    return (
        <Container>
            <Marquee>
                {announcements.map((announcement, index) => {
                    return (
                        <Span key={announcement + index}>{announcement}</Span>
                    )
                })}
            </Marquee>

        </Container>
    )
}

export default Announcement;