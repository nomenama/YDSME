import {H3, P1} from "../../common/index.styles";
import React, {useEffect, useState} from "react";
import * as S from "./SideBar.styles";

export const SideBar = () => {
    const [sideBarWidth, setSideBarWidth] = useState<number | undefined>(undefined);
    const [sideBarTop, setSideBarTop] = useState<number | undefined>(undefined);

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
            <H3>Announcements</H3>
            <P1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nisi.</P1>
            <P1>Lorem ipsum dolor sit amet.</P1>
        </S.SideBar>
    )
}