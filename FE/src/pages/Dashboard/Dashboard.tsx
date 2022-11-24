import React from "react";
import {InnerContainer, PageContainer} from "../../common/index.styles";
import ChatRoom from "components/ChatRoom/ChatRoom";
import {io} from "socket.io-client";

const socket = io("http://localhost:8800");

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