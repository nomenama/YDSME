import React from 'react';
import {MessageObj} from 'types';
import {ChatBody, ChatSpan, Message, MessageContent} from './Messages.styles';

interface MessagesProps {
    chatArray: MessageObj[];
    name: string;
}

const Messages = ({chatArray, name}: MessagesProps) => {
    return (
        <ChatBody>
            {chatArray.map((chat, index) => (
                <MessageContent key={chat.time + index} sender={chat.author === name ? "self" : "other"}>
                    <Message sender={chat.author === name ? "self" : "other"}>{chat.message}</Message>
                    <ChatSpan sender={chat.author === name ? "self" : "other"} fontWeight={600}>
                        Nomen
                        <ChatSpan sender={chat.author === name ? "self" : "other"}>12:00</ChatSpan>
                    </ChatSpan>
                </MessageContent>
            ))}
        </ChatBody>
    );
};

export default Messages;