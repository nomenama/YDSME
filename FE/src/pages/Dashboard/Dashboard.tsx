import React from "react";
import {InnerContainer, P1, PageContainer} from "../../common/index.styles";
import {Greeting} from "./Dashboard.styles";
import useUser from "../../hooks/useUser";
import {useTheme} from "styled-components";

const Dashboard = () => {
    const {user} = useUser();
    const theme = useTheme();

    return (
        <PageContainer>
            <InnerContainer>
                <Greeting>
                    <P1 color={theme.colors.primary}>Welcome, {user.firstName}</P1>
                </Greeting>
            </InnerContainer>
        </PageContainer>
    )
}

export default Dashboard;