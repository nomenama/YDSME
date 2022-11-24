import React, {useEffect, useRef} from 'react';
import {MessageObj} from 'types';
import {BotChat, ChatBody, ChatSpan, Message, MessageContent} from './Messages.styles';

interface MessagesProps {
    chatMessages: MessageObj[];
    username: string;
}

const Messages = ({chatMessages, username}: MessagesProps) => {
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messageEndRef.current !== null) {
            messageEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }

    useEffect(scrollToBottom, [chatMessages])

    return (
        <ChatBody>
            {chatMessages.map(({message, author, time}, index) => {
                return (
                    <MessageContent key={time + index} sender={author === username ? "self" : "other"}>
                        {author !== "BOT" ? (
                            <>
                                <Message sender={author === username ? "self" : "other"}>{message}</Message>
                                <ChatSpan sender={author === username ? "self" : "other"} fontWeight={600}>
                                    {author}
                                    <ChatSpan sender={author === username ? "self" : "other"}>{time}</ChatSpan>
                                </ChatSpan>
                            </>
                        ) : (
                            <BotChat>{message}</BotChat>
                        )}

                    </MessageContent>
                )
            })}
            {/*Needed for auto-scrolling*/}
            <div ref={messageEndRef}/>
        </ChatBody>
    );
};

export default Messages;