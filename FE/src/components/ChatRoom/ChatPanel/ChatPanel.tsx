import React, {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import {AttachmentIcon, AvatarGroup, ChatEnterButton, ChatFooter, ChatHeader, ChatInput, ChatPanelContent, ImageIcon} from "./ChatPanel.styles";
import {MessageObj, UserObj} from "../../../types";
import Messages from '../Messages/Messages';
import {Avatar, Tooltip} from 'antd';

interface ChatPanelInterface {
    username: string;
    onlineUsers: UserObj[];
    socket: any;
    chatMessages: MessageObj[];
    currentMessage: string;
    setCurrentMessage: Dispatch<SetStateAction<string>>;
}

const ChatPanel = ({socket, username, onlineUsers, chatMessages, currentMessage, setCurrentMessage}: ChatPanelInterface) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.onfocus = () => {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
            }
        }
    }, [])

    const sendMessage = () => {
        if (!currentMessage) return;
        const messageData = {
            author: username,
            message: currentMessage,
            time: new Date(Date.now()).toLocaleDateString("en-GB"),
            file: ""
        };
        socket.emit("send", messageData);
        setCurrentMessage("");
    };

    return (
        <ChatPanelContent>
            <ChatHeader>
                Live Chat
                <AvatarGroup
                    maxCount={1}
                    maxPopoverTrigger="hover"
                    maxPopoverPlacement="top"
                    maxStyle={{backgroundColor: "darkgray", color: "#312f2f", cursor: "pointer"}}
                >
                    {onlineUsers.filter((user) => user.name !== username).map(({name}, index) => {
                        const initial = name.split("")[0].toUpperCase();
                        return (
                            <Tooltip key={name + index} title={name}>
                                <Avatar style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, color: "#ffffff", cursor: "pointer"}}>{initial}</Avatar>
                            </Tooltip>
                        )
                    })}
                </AvatarGroup>
            </ChatHeader>

            <Messages chatMessages={chatMessages} username={username}/>

            <ChatFooter>
                <ChatInput
                    type="text"
                    placeholder="Type something..."
                    onChange={(event) => setCurrentMessage(event.target.value)}
                    value={currentMessage}
                    onKeyDown={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                    ref={inputRef}
                />
                <AttachmentIcon size={25}/>
                <ImageIcon size={25}/>
                <ChatEnterButton onClick={sendMessage}>Send</ChatEnterButton>
            </ChatFooter>
        </ChatPanelContent>
    );
};

export default ChatPanel;