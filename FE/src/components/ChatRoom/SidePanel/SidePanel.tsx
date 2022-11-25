import {P1} from 'common/index.styles';
import React from 'react';
import {Avatar, AvatarContainer, ChangeNameButton, ChatSidePanel, SideBarContent, SideBarFooter, SideBarHeader, UserAvatar} from "./SidePanel.styles";
import {useTheme} from "styled-components";
import {FaUserSecret} from "react-icons/fa";
import {FcBusinessman} from "react-icons/fc";
import {UserObj} from "../../../types";

export interface SidePanelInterface {
    username: string;
    onlineUsers: UserObj[];
}

const SidePanel = ({onlineUsers, username}: SidePanelInterface) => {
    const theme = useTheme();

    const handleChangeName = () => {
        localStorage.removeItem("username");
        window.location.reload();
    }

    return (
        <ChatSidePanel>
            <SideBarHeader>
                <P1 color={theme.colors.white}>Online users</P1>
            </SideBarHeader>

            <SideBarContent>
                {onlineUsers.map(({name}, index) => (
                    <UserAvatar key={index}>
                        <Avatar size={40}>
                            <FcBusinessman size={30} color={theme.colors.white}/>
                        </Avatar>
                        <P1 color={theme.colors.white}>{name}</P1>
                    </UserAvatar>
                ))}
            </SideBarContent>

            <SideBarFooter>
                <AvatarContainer>
                    <Avatar>
                        <FaUserSecret size={20} color={theme.colors.white}/>
                    </Avatar>
                    <P1 color={theme.colors.white}>{username}</P1>
                </AvatarContainer>

                <ChangeNameButton onClick={handleChangeName}>Change Name</ChangeNameButton>
            </SideBarFooter>
        </ChatSidePanel>
    );
};

export default SidePanel;