import React, {useState} from "react";
import {
    Button,
    Container,
    InnerContainer,
    Hamburger,
    NavContainer,
    CloseNavBar,
    Logo,
    PrimaryButton, DrawerHamburger
} from "./Header.styles";
import {MainNavigation, MemberNavigation} from "./Navigation";
import {Link, useLocation} from "react-router-dom";
import {useTheme} from "styled-components";
import {Link as ExternalLink} from "../../common/index.styles";
import Drawer from "../Drawer/Drawer";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

interface HeaderProps {
    includeLoginButton?: boolean;
    includeDrawerButton?: boolean;
    navigations: typeof MainNavigation | typeof MemberNavigation;
}

const Header: React.FC<HeaderProps> = ({navigations, includeLoginButton = false, includeDrawerButton = false}) => {
    const location = useLocation();
    const theme = useTheme();
    const [displayMobileNavBar, setDisplayMobileNavBar] = useState<boolean>(false);
    const [displayDrawer, setDisplayDrawer] = useState(false);

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

                    {includeDrawerButton && (
                        <DrawerHamburger size={25} onClick={() => setDisplayDrawer((prevState) => !prevState)}/>

                    )}
                </NavContainer>

                <Hamburger size={30} color={theme.colors.white} onClick={onToggleSideBar}/>

                {displayMobileNavBar && (
                    <MobileNavigation
                        navigations={navigations}
                        onToggleSideBar={onToggleSideBar}
                        setDisplayMobileNavBar={setDisplayMobileNavBar}
                        includeLoginButton={includeLoginButton}
                        includeDrawerButton={includeDrawerButton}
                        setDisplayDrawer={setDisplayDrawer}
                    />
                )}
            </InnerContainer>

            {displayDrawer && <Drawer onClose={() => setDisplayDrawer(false)}/>}
        </Container>
    )
}

export default Header;

