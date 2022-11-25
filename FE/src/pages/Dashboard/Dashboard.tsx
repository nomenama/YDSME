import React from "react";
import ChatRoom from "components/ChatRoom/ChatRoom";
import {io} from "socket.io-client";
import {MainContainer, MemberPage} from "./Dashboard.styles";

const uri = process.env.REACT_APP_SOCKET_URL || "http://localhost:8800";

const socket = io(uri, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 99999
});

const Dashboard = () => {
    return (
        <MemberPage>
            <MainContainer>
                <ChatRoom socket={socket}/>
            </MainContainer>
        </MemberPage>
    )
}

export default Dashboard;