import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {AttachmentIcon, ChatEnterButton, ChatFooter, ChatHeader, ChatInput, ChatPanelContent, ImageIcon} from "./ChatPanel.styles";
import {MessageObj} from "../../../types";
import Messages from '../Messages/Messages';

interface ChatPanelInterface {
    username: string;
    socket: any;
    chatMessages: MessageObj[];
    currentMessage: string;
    setCurrentMessage: Dispatch<SetStateAction<string>>;
}

const ChatPanel = ({socket, username, chatMessages, currentMessage, setCurrentMessage}: ChatPanelInterface) => {
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
            <ChatHeader>Live Chat</ChatHeader>

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