import {P1} from 'common/index.styles';
import React from 'react';
import {AvatarContainer, ChangeNameButton, ChatSidePanel, SideBarContent, SideBarFooter, SideBarHeader, UserAvatar} from "./SidePanel.styles";
import {useTheme} from "styled-components";
import {UserObj} from "../../../types";
import useUser from "../../../hooks/useUser";
import {UserOutlined} from '@ant-design/icons';
import {Avatar, Tooltip} from 'antd';

export interface SidePanelInterface {
    username: string;
    onlineUsers: UserObj[];
}

const SidePanel = ({onlineUsers, username}: SidePanelInterface) => {
    const theme = useTheme();
    const {user} = useUser();

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
                {onlineUsers.filter(user => user.name !== username).map(({name}, index) => {
                    return (
                        <UserAvatar key={name + index}>
                            <Tooltip title={name}>
                                <Avatar icon={<UserOutlined/>} style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, color: "#ffffff"}}>
                                    {name}
                                </Avatar>
                            </Tooltip>
                            <P1 color={theme.colors.white}>{name}</P1>
                        </UserAvatar>
                    )
                })}
            </SideBarContent>

            <SideBarFooter>
                <AvatarContainer>
                    <Tooltip title={`Signed in as ${username}`}>
                        <Avatar icon={<UserOutlined/>} style={{backgroundColor: "green", color: "#ffffff"}}>
                            {username}
                        </Avatar>
                    </Tooltip>
                    <P1 color={theme.colors.white}>{username}</P1>
                </AvatarContainer>

                {(user.firstName === "Member" || user.firstName === "Engineer") && (
                    <ChangeNameButton onClick={handleChangeName}>Change Name</ChangeNameButton>
                )}
            </SideBarFooter>
        </ChatSidePanel>
    );
};

export default SidePanel;