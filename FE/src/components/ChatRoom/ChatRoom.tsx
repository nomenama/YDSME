import React, {useEffect, useState} from 'react';
import {ChatRoomContainer} from "./ChatRoom.styles";
import SidePanel from './SidePanel/SidePanel';
import ChatPanel from './ChatPanel/ChatPanel';
import {MessageObj, UserObj} from "../../types";
import {Socket} from 'socket.io-client/build/esm/socket';
import {getMessages} from "../../api/api";
import SignIn from "./SignIn";
import useUser from "../../hooks/useUser";

const ChatRoom = ({socket}: { socket: Socket }) => {
    const {user} = useUser();
    const username = JSON.parse(localStorage.getItem("username") as string) || user.firstName;
    const [onlineUsers, setOnlineUsers] = useState<UserObj[]>([]);
    const [chatMessages, setChatMessages] = useState<MessageObj[]>([]);
    const [currentMessage, setCurrentMessage] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        socket.connect();
        socket.on("connect", () => {
            socket.emit("joining", {name: username});
        });

        socket.on("users", (users: any) => {
            setOnlineUsers(users)
        });

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

        const getMessageHistory = async () => {
            try {
                const {status, data} = await getMessages(signal);

                if (status === 200 && data.length) {
                    return setChatMessages((currentMessages) => [...data, ...currentMessages])
                }
            } catch (err: any) {
                console.log("Error loading messages")
            }
        };

        void getMessageHistory();

        return () => {
            socket.disconnect();
        }

    }, []);

    return (
        <ChatRoomContainer>
            {!Boolean(username === "Member" || username === "Engineer") ? (
                <>
                    <SidePanel username={username} onlineUsers={onlineUsers}/>
                    <ChatPanel
                        socket={socket}
                        username={username}
                        onlineUsers={onlineUsers}
                        chatMessages={chatMessages}
                        currentMessage={currentMessage}
                        setCurrentMessage={setCurrentMessage}
                    />
                </>
            ) : <SignIn/>}

        </ChatRoomContainer>
    );
};

export default ChatRoom;