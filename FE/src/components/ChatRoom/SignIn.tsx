import {H4, P1} from 'common/index.styles';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {EnterNameContainer, SignInContainer} from "./ChatRoom.styles";
import {useTheme} from "styled-components";
import {Input} from 'pages/Login/Login.styles';
import {PrimaryButton} from 'components/Header/Header.styles';
import {ButtonGroup} from 'pages/Admin/Admin.styles';

export interface SignInProps {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

const SignIn = ({name, setName}: SignInProps) => {
    const theme = useTheme();
    const [error, setError] = useState(false);

    const handleSignIn = () => {
        if (!name) {
            setError(true);
        }
        localStorage.setItem("name", JSON.stringify(name));
        setName("");
    }

    return (
        <SignInContainer>
            <EnterNameContainer>
                <H4 color={theme.colors.primary}>Enter your name</H4>
                <Input
                    type="text"
                    placeholder="Enter your name to start chatting..."
                    onChange={(event) => {
                        setError(false);
                        setName(event.target.value);
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