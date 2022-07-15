import React from "react";
import {Button, Container, LoginButton, NavContainer} from "./Header.styles";
import {InnerContainer} from "../../pages/index.styles";

interface HeaderProps {
    logo: string;
    navigations: string[];
}

const Header: React.FC<HeaderProps> = ({logo, navigations}) => {

    return (
        <Container>
            <InnerContainer direction="row" alignItems="center" justifyContent="space-between">
                {/*Todo - add logo*/}
                <img src="" alt="Logo"/>

                <NavContainer>
                    {navigations.map((nav, index) => (
                        <Button onClick={() => {}} key={nav} selected={false}>{nav}</Button>
                    ))}
                    <LoginButton>Login</LoginButton>
                </NavContainer>
            </InnerContainer>
        </Container>
    )
}

export default Header;

