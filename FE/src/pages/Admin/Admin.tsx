import React, {useState} from 'react';
import {P1} from "../../common/index.styles";
import {FORM_TYPE} from "../../types";
import {SecondaryButton} from "../Login/Login.styles";
import NewUser from './Form/NewUser';
import {Greeting, MainContainer, MemberPage} from "../Dashboard/Dashboard.styles";
import {useTheme} from "styled-components";
import useUser from "../../hooks/useUser";
import ManageUser from "./Form/ManageUser";
import {FormContainer} from "./Admin.styles";

const Admin = () => {
    const theme = useTheme();
    const {user} = useUser();
    const [whichForm, setWhichForm] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleWhichFormToRender = (form: FORM_TYPE) => {
        setWhichForm(form);
    }

    return (
        <MemberPage>
            <MainContainer justify="flex-start">
                <FormContainer>
                    <Greeting>
                        <P1 color={theme.colors.primary}>Welcome, {user.firstName}</P1>
                    </Greeting>

                    <SecondaryButton onClick={() => handleWhichFormToRender(FORM_TYPE.NEW_USER)}>Create New User</SecondaryButton>
                    {whichForm === FORM_TYPE.NEW_USER && <NewUser isLoading={isLoading} setIsLoading={setIsLoading} setWhichForm={setWhichForm}/>}

                    <SecondaryButton onClick={() => handleWhichFormToRender(FORM_TYPE.MANAGE_USER)}>Manage User</SecondaryButton>
                    {whichForm === FORM_TYPE.MANAGE_USER && <ManageUser isLoading={isLoading} setIsLoading={setIsLoading} setWhichForm={setWhichForm}/>}
                </FormContainer>
            </MainContainer>
        </MemberPage>
    );
};

export default Admin;