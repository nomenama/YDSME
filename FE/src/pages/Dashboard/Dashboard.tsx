import React, {useState} from "react";
import ChatRoom from "components/ChatRoom/ChatRoom";
import {io} from "socket.io-client";
import {MainContainer, MemberPage} from "./Dashboard.styles";
import NoticeBoard from "components/NoticeBoard/NoticeBoard";
import {useDevice} from "../../hooks/useDevice";
import {FloatButton} from "antd";
import {MessageFilled, SwitcherFilled,} from "@ant-design/icons";

const uri = process.env.REACT_APP_SOCKET_URL || "http://localhost:8800";

const socket = io(uri, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 99999
});

const Dashboard = () => {
    const {deviceWidth} = useDevice();
    const [displayNoticeBoard, setDisplayNoticeBoard] = useState<boolean>(true);

    const toggleDisplay = () => setDisplayNoticeBoard((prevState) => !prevState);

    return (
        <MemberPage>
            <MainContainer>
                <ChatRoom socket={socket}/>
            </MainContainer>

            {/*            {deviceWidth > 1200 && (
                <MainContainer direction={"row"}>
                    <NoticeBoard/>
                    <ChatRoom socket={socket}/>
                </MainContainer>
            )}

            {deviceWidth <= 1200 && (
                <MainContainer direction="column">
                    {displayNoticeBoard && <NoticeBoard/>}
                    {!displayNoticeBoard && <ChatRoom socket={socket}/>}
                </MainContainer>
            )}

            {deviceWidth <= 1200 && (
                <FloatButton
                    onClick={toggleDisplay}
                    icon={displayNoticeBoard ? <MessageFilled/> : <SwitcherFilled/>}

                    type="primary"
                    tooltip={displayNoticeBoard ? "Chat Room" : "Notice Board"}
                />
            )}*/}
        </MemberPage>
    )
}

export default Dashboard;