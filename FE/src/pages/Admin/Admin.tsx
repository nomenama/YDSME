import React, {useState} from 'react';
import {H1, H3, InnerContainer, P1, PageContainer} from "../../common/index.styles";
import {FORM_TYPE} from "../../types";
import {SecondaryButton} from "../Login/Login.styles";
import NewUser from './Form/NewUser';
import {Greeting} from "../Dashboard/Dashboard.styles";
import {useTheme} from "styled-components";
import useUser from "../../hooks/useUser";

const Admin = () => {
    const theme = useTheme();
    const {user} = useUser();
    const [whichForm, setWhichForm] = useState<string | boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleWhichFormToRender = (form: FORM_TYPE) => {
        setWhichForm(form);
    }

    return (
        <PageContainer>
            <InnerContainer>
                <Greeting>
                    <P1 color={theme.colors.primary}>Welcome, {user.firstName}</P1>
                </Greeting>

                <SecondaryButton onClick={() => handleWhichFormToRender(FORM_TYPE.NEW_USER)}>Create New User</SecondaryButton>
                {whichForm === FORM_TYPE.NEW_USER && <NewUser isLoading={isLoading} setIsLoading={setIsLoading}/>}

                <SecondaryButton onClick={() => handleWhichFormToRender(FORM_TYPE.DELETE_USER)}>Delete User</SecondaryButton>
                {whichForm === FORM_TYPE.DELETE_USER && <NewUser isLoading={isLoading} setIsLoading={setIsLoading}/>}

                <SecondaryButton onClick={() => handleWhichFormToRender(FORM_TYPE.UPDATE_USER)}>Update User</SecondaryButton>
                {whichForm === FORM_TYPE.UPDATE_USER && <NewUser isLoading={isLoading} setIsLoading={setIsLoading}/>}

            </InnerContainer>
        </PageContainer>
    );
};

export default Admin;