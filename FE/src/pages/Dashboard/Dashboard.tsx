import React from "react";
import {InnerContainer, PageContainer} from "../../common/index.styles";
import ChatRoom from "components/ChatRoom/ChatRoom";

const Dashboard = () => {
    return (
        <PageContainer>
            <InnerContainer direction="row" justifyContent="space-between" alignItems="center">
                <ChatRoom/>
            </InnerContainer>
        </PageContainer>
    )
}

export default Dashboard;