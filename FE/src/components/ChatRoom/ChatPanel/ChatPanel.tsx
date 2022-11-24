import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
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

    const sendMessage = () => {
        if (!currentMessage) return;
        const messageData = {
            author: username,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":" + String(new Date(Date.now()).getMinutes()).padStart(2, "0")
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
                    autoFocus={true}
                    onChange={(event) => setCurrentMessage(event.target.value)}
                    value={currentMessage}
                    onKeyDown={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <AttachmentIcon size={25}/>
                <ImageIcon size={25}/>
                <ChatEnterButton onClick={sendMessage}>Send</ChatEnterButton>
            </ChatFooter>
        </ChatPanelContent>
    );
};

export default ChatPanel;