import React, {useEffect, useState} from 'react';
import {ChatEnterButton, ChatFooter, ChatHeader, ChatInput, ChatPanelContent} from "./ChatPanel.styles";
import {ChatInterface, MessageObj} from "../../../types";
import Messages from '../Messages/Messages';

const ChatPanel = ({socket, name, room}: ChatInterface) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatArray, setChatArray] = useState<MessageObj[]>([]);

    const sendMessage = async () => {
        if (!currentMessage) return;
        const messageData = {
            room,
            author: name,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        };
        await socket.emit("send_message", messageData);
        setChatArray((prevState) => [...prevState, messageData]);
        setCurrentMessage("");
    };

    useEffect(() => {
        socket.on("receive_message", (receivedMessage: MessageObj) => {
            console.log(receivedMessage)
            setChatArray((prevState) => [...prevState, receivedMessage]);
        })
    }, [socket])

    return (
        <ChatPanelContent>
            <ChatHeader>Live Chat</ChatHeader>

            <Messages chatArray={chatArray} name={name}/>

            <ChatFooter>
                <ChatInput
                    type="text"
                    placeholder="Type something..."
                    onChange={(event) => setCurrentMessage(event.target.value)}
                    value={currentMessage}
                    onKeyDown={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <ChatEnterButton onClick={sendMessage}>Send</ChatEnterButton>
            </ChatFooter>
        </ChatPanelContent>
    );
};

export default ChatPanel;