import {Divider, H4, P1} from "../../common/index.styles";
import React, {useEffect, useState} from "react";
import * as S from "./SideBar.styles";
import useContent from "../../hooks/useContent";

export const SideBar = () => {
    const [sideBarWidth, setSideBarWidth] = useState<number | undefined>(undefined);
    const [sideBarTop, setSideBarTop] = useState<number | undefined>(undefined);
    const {announcements} = useContent();

    useEffect(() => {
        const sideBarElement = document.querySelector(".sideBar")!.getBoundingClientRect();
        setSideBarWidth(sideBarElement.width);
        setSideBarTop(sideBarElement.top);
    }, []);

    useEffect(() => {
        if (!sideBarTop) return;

        const isSticky = () => {
            const sideBarElement = document.querySelector(".sideBar")!;
            const scrollTop = window.scrollY;

            if (scrollTop >= sideBarTop - 10) {
                sideBarElement.classList.add("isSticky");
            } else {
                sideBarElement.classList.remove("isSticky");
            }
        }

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };

    }, [sideBarTop])

    return (
        <S.SideBar width={sideBarWidth} className="sideBar">
            <H4>Exciting Events</H4>
            {announcements.map((announcement: string, index: number) => (
                <Divider key={index}>
                    <P1>{announcement}</P1>
                </Divider>
            ))}
        </S.SideBar>
    )
}