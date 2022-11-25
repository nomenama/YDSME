import {H4, P1} from 'common/index.styles';
import React, {useState} from 'react';
import {EnterNameContainer, SignInContainer} from "./ChatRoom.styles";
import {useTheme} from "styled-components";
import {Input} from 'pages/Login/Login.styles';
import {PrimaryButton} from 'components/Header/Header.styles';
import {ButtonGroup} from 'pages/Admin/Admin.styles';

const SignIn = () => {
    const theme = useTheme();
    const [error, setError] = useState(false);
    const [newName, setNewName] = useState("");

    const handleSignIn = () => {
        localStorage.setItem("username", JSON.stringify(newName));
        window.location.reload();
    }

    return (
        <SignInContainer>
            <EnterNameContainer>
                <H4 color={theme.colors.primary}>Enter your name</H4>
                <Input
                    type="text"
                    autoFocus={true}
                    placeholder="Enter your name to start chatting..."
                    onChange={(event) => {
                        setError(false);
                        setNewName(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSignIn();
                        }
                    }}
                />
                <ButtonGroup direction="column">
                    {error && <P1 color={theme.colors.negative} textAlign="center">Please enter your name</P1>}
                    <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
                </ButtonGroup>
            </EnterNameContainer>
        </SignInContainer>
    );
};

export default SignIn;