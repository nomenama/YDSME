import React from "react";
import {H1, InnerContainer, P1, PageContainer} from "../../common/index.styles";
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

                <H1>DASHBOARD</H1>
            </InnerContainer>
        </PageContainer>
    )
}

export default Dashboard;