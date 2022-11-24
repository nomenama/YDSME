import React, {useEffect, useState} from 'react';
import {ChatRoomContainer} from "./ChatRoom.styles";
import io from "socket.io-client";
import SidePanel from './SidePanel/SidePanel';
import ChatPanel from './ChatPanel/ChatPanel';
import useUser from 'hooks/useUser';
import {MessageObj, UserObj} from "../../types";

const socket = io("http://localhost:8800", {
    transports: ["websocket", "polling"]
});

const ChatRoom = () => {
    const {user} = useUser();
    const [onlineUsers, setOnlineUsers] = useState<UserObj[]>([]);
    const [chatMessages, setChatMessages] = useState<MessageObj[]>([]);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("joining", {name: user.firstName});
        });

        socket.on("users", (users: any) => {
            setOnlineUsers(users)
        });

        socket.on("message", (data: MessageObj) => {
            setChatMessages((currentMessages) => [...currentMessages, data])
        });

        socket.on("disconnected", (id: string) => {
            setOnlineUsers((users) => {
                return users.filter((user) => user.id !== id)
            })
        });

    }, [])

    return (
        <ChatRoomContainer>
            <SidePanel username={user.firstName} onlineUsers={onlineUsers}/>
            <ChatPanel
                socket={socket}
                username={user.firstName}
                chatMessages={chatMessages}
                currentMessage={currentMessage}
                setCurrentMessage={setCurrentMessage}
            />
        </ChatRoomContainer>
    );
};

export default ChatRoom;