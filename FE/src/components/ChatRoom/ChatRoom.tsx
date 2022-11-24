import React, {useEffect, useState} from 'react';
import {ChatRoomContainer} from "./ChatRoom.styles";
import SidePanel from './SidePanel/SidePanel';
import ChatPanel from './ChatPanel/ChatPanel';
import useUser from 'hooks/useUser';
import {MessageObj, UserObj} from "../../types";
import {Socket} from 'socket.io-client/build/esm/socket';

const ChatRoom = ({socket}: { socket: Socket }) => {
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

        socket.on("message_history", (messageHistory: MessageObj[]) => {
            setChatMessages((currentMessages) => [...messageHistory, ...currentMessages])
        })

        socket.on("message", (data: MessageObj) => {
            setChatMessages((currentMessages) => [...currentMessages, data])
        });

        socket.on("disconnected", ({id, name}: UserObj) => {
            setChatMessages((currentMessages) => [...currentMessages, {
                author: "BOT",
                message: `${name} has left the chat.`,
                time: new Date(Date.now()).toLocaleDateString("en-GB"),
                file: ""
            }])
            setOnlineUsers((users) => {
                return users.filter((user) => user.id !== id)
            });
        });

    }, []);

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