import React from "react";
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import {createUser, deleteUser} from "../../api/api";
import {User} from "../../types";
import {LoginButton} from "../Login/Login.styles";

const Dashboard = () => {

    const user: User = {
        firstName: "Test",
        lastName: "Account",
        username: "test",
        password: "testUser1",
        roles: ["MEMBER"]
    }

    return (
        <PageContainer>
            <InnerContainer>
                <H1>DASHBOARD</H1>
                <LoginButton onClick={() => createUser(user)}>Create New User</LoginButton>
                <LoginButton onClick={() => deleteUser(108)}>Delete User</LoginButton>
            </InnerContainer>
        </PageContainer>
    )
}

export default Dashboard;