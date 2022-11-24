import React from "react";
import {InnerContainer, PageContainer} from "../../common/index.styles";
import ChatRoom from "components/ChatRoom/ChatRoom";
import {io} from "socket.io-client";

const uri = process.env.NODE_ENV === "production" ? "https://www.yorkmodelengineers.co.uk" : "http://localhost:8800";

const socket = io(uri);

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