import {H4, P1} from 'common/index.styles';
import React, {useState} from 'react';
import {Avatar, AvatarContainer, ChangeNameButton, ChatSidePanel, SideBarContent, SideBarHeader, UserAvatar} from "./SidePanel.styles";
import {ChatInterface} from "../../../types";
import {useTheme} from "styled-components";
import {FaUserSecret} from "react-icons/fa";
import {FcBusinessman} from "react-icons/fc";

const SidePanel = ({socket, name, room}: ChatInterface) => {
    const theme = useTheme();
    const [onlineUsers, setOnlineUsers] = useState([]);

    return (
        <ChatSidePanel>
            <SideBarHeader>
                <P1 color={theme.colors.white}>Online users</P1>
                <AvatarContainer>
                    <Avatar>
                        <FaUserSecret size={20} color={theme.colors.white}/>
                    </Avatar>
                    <P1 color={theme.colors.white}>{name}</P1>
                    {/*<ChangeNameButton >Change Name</ChangeNameButton>*/}
                </AvatarContainer>
            </SideBarHeader>

            <SideBarContent>
                <UserAvatar>
                    <Avatar size={40}>
                        <FcBusinessman size={30} color={theme.colors.white}/>
                    </Avatar>
                    <P1 color={theme.colors.white}>Andy is Online</P1>
                </UserAvatar>
                <UserAvatar>
                    <Avatar size={40}>
                        <FcBusinessman size={30} color={theme.colors.white}/>
                    </Avatar>
                    <P1 color={theme.colors.white}>Jane is Online</P1>
                </UserAvatar>
                <UserAvatar>
                    <Avatar size={40}>
                        <FcBusinessman size={30} color={theme.colors.white}/>
                    </Avatar>
                    <P1 color={theme.colors.white}>Lee is Online</P1>
                </UserAvatar>
            </SideBarContent>
        </ChatSidePanel>
    );
};

export default SidePanel;