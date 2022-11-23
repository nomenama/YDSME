import React, {useEffect, useState} from 'react';
import {ChatRoomContainer} from "./ChatRoom.styles";
import SignIn from './SignIn';
import * as io from "socket.io-client";
import SidePanel from './SidePanel/SidePanel';
import ChatPanel from './ChatPanel/ChatPanel';

let socket = io.connect("http://localhost:8800");

const ChatRoom = () => {
    let nameFromLocalStorage = localStorage.getItem("name");
    const [name, setName] = useState<string>("");
    const room = "public_room";

    useEffect(() => {
        if (nameFromLocalStorage) {
            const tempName = JSON.parse(nameFromLocalStorage);
            setName(tempName);
        }
    }, [name, nameFromLocalStorage])

    useEffect(() => {
        if (nameFromLocalStorage) {
            socket.emit("join_room", {room, name});
        }

    }, [name, nameFromLocalStorage]);

    return (
        <ChatRoomContainer>
            {!nameFromLocalStorage && <SignIn name={name} setName={setName}/>}

            <SidePanel socket={socket} name={name} room={room}/>
            <ChatPanel socket={socket} name={name} room={room}/>
        </ChatRoomContainer>
    );
};

export default ChatRoom;