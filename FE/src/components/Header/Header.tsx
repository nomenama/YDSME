import React, {useState} from "react";
import {
    Button,
    Container,
    InnerContainer,
    Hamburger,
    LoginButton,
    MobileNavContainer,
    NavContainer,
    CloseNavBar,
    Logo
} from "./Header.styles";
import {MainNavigation} from "./Navigation";
import {Link, useLocation} from "react-router-dom";
import {Flex} from "../../common/index.styles";
import {useTheme} from "styled-components";
import {Link as ExternalLink} from "../../common/index.styles";

interface HeaderProps {
    logo: string;
    navigations: typeof MainNavigation;
}

const Header: React.FC<HeaderProps> = ({logo, navigations}) => {
    const location = useLocation();
    const theme = useTheme();
    const [displayMobileNavBar, setDisplayMobileNavBar] = useState<boolean>(false);

    const onToggleSideBar = () => {
        setDisplayMobileNavBar((prev) => !prev);
    }

    return (
        <Container>
            <InnerContainer>
                <Link to="/">
                    <Logo src="/images/web-logo.jpg" alt="Logo"/>
                </Link>

                <NavContainer>
                    {Object.entries(navigations).map(([key, value]) => {
                        return (
                            <Link to={value} key={key}>
                                <Button selected={location.pathname === value}>{key}</Button>
                            </Link>
                        )
                    })}

                    <ExternalLink href="https://membermojo.co.uk/york-model-engineers">
                        <Button>Membership</Button>
                    </ExternalLink>
                    <Link to="/login">
                        <LoginButton>Login</LoginButton>
                    </Link>
                </NavContainer>

                <Hamburger size={30} color={theme.colors.white} onClick={onToggleSideBar}/>

                {displayMobileNavBar && (
                    <MobileNavContainer>
                        <Flex justify="flex-end">
                            <CloseNavBar size={30} color={theme.colors.white} onClick={onToggleSideBar}/>
                        </Flex>

                        {Object.entries(navigations).map(([key, value]) => {
                            return (
                                <Link to={value} key={key}>
                                    <Button onClick={() => setDisplayMobileNavBar(false)}>{key}</Button>
                                </Link>
                            )
                        })}
                        <ExternalLink href="https://membermojo.co.uk/york-model-engineers">
                            <Button>Membership</Button>
                        </ExternalLink>
                        <Link to="/login">
                            <LoginButton onClick={() => setDisplayMobileNavBar(false)}>Login</LoginButton>
                        </Link>
                    </MobileNavContainer>)}
            </InnerContainer>
        </Container>
    )
}

export default Header;

