import React, {useEffect, useState} from "react";
import {InnerContainer, PageContainer} from "../../common/index.styles";
import ChatRoom from "components/ChatRoom/ChatRoom";
import {io} from "socket.io-client";

const uri = process.env.REACT_APP_SOCKET_URL || "http://localhost:8800";

const socket = io(uri, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 99999
});

const Dashboard = () => {
    return (
        <PageContainer>
            <InnerContainer direction="row" justifyContent="space-between" alignItems="center">
                <ChatRoom socket={socket}/>
            </InnerContainer>
        </PageContainer>
    )
}

export default Dashboard;