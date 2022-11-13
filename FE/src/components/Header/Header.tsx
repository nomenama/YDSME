import React, {useEffect, useState} from "react";
import {
    Button,
    Container,
    InnerContainer,
    Hamburger,
    MobileNavContainer,
    NavContainer,
    CloseNavBar,
    Logo,
    PrimaryButton
} from "./Header.styles";
import {MainNavigation, MemberNavigation} from "./Navigation";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Flex} from "../../common/index.styles";
import {useTheme} from "styled-components";
import {Link as ExternalLink} from "../../common/index.styles";

interface HeaderProps {
    includeLoginButton?: boolean;
    includeLogoutButton?: boolean;
    navigations: typeof MainNavigation | typeof MemberNavigation;
}

const Header: React.FC<HeaderProps> = ({navigations, includeLoginButton = false, includeLogoutButton = false}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const [displayMobileNavBar, setDisplayMobileNavBar] = useState<boolean>(false);

    const onToggleSideBar = () => {
        setDisplayMobileNavBar((prev) => !prev);
    }

    const handleLogout = () => {
        sessionStorage.clear();
        /*Cookies.remove("token", {path: "/"})*/

        navigate("/", {replace: true})
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

                    {includeLoginButton && (
                        <>
                            <ExternalLink href="https://membermojo.co.uk/york-model-engineers">
                                <Button>Membership</Button>
                            </ExternalLink>
                            <Link to="/login">
                                <PrimaryButton>Login</PrimaryButton>
                            </Link>
                        </>
                    )}

                    {includeLogoutButton && (
                        <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
                    )}
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

                        {includeLoginButton && (
                            <>
                                <ExternalLink href="https://membermojo.co.uk/york-model-engineers">
                                    <Button>Membership</Button>
                                </ExternalLink>
                                <Link to="/login">
                                    <PrimaryButton onClick={() => setDisplayMobileNavBar(false)}>Login</PrimaryButton>
                                </Link>
                            </>
                        )}

                        {includeLogoutButton && (
                            <PrimaryButton onClick={() => {
                                handleLogout();
                                setDisplayMobileNavBar(false);
                            }}>Logout</PrimaryButton>
                        )}
                    </MobileNavContainer>)}
            </InnerContainer>
        </Container>
    )
}

export default Header;

