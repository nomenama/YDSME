import React, {useState} from "react";
import {
    Button,
    Container,
    InnerContainer,
    Hamburger,
    NavContainer,
    Logo,
    PrimaryButton, DrawerHamburger
} from "./Header.styles";
import {MainNavigation, MemberNavigation} from "./Navigation";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useTheme} from "styled-components";
import {Link as ExternalLink} from "../../common/index.styles";
import Drawer from "../Drawer/Drawer";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import {Logout} from "../../api/api";

interface HeaderProps {
    includeLoginButton?: boolean;
    includeDrawerButton?: boolean;
    navigations: typeof MainNavigation | typeof MemberNavigation;
}

const Header: React.FC<HeaderProps> = ({navigations, includeLoginButton = false, includeDrawerButton = false}) => {
    const location = useLocation();
    const theme = useTheme();
    const navigate = useNavigate();
    const [displayMobileNavBar, setDisplayMobileNavBar] = useState<boolean>(false);
    const [displayDrawer, setDisplayDrawer] = useState(false);

    const onToggleSideBar = () => {
        setDisplayMobileNavBar((prev) => !prev);
    }

    const handleLogout = () => {
        void Logout();
        sessionStorage.clear();
        navigate("/", {replace: true});
        window.location.reload();
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
                        handleOnLogout={handleLogout}
                    />
                )}
            </InnerContainer>

            {displayDrawer && <Drawer onClose={() => setDisplayDrawer(false)} handleLogout={handleLogout}/>}
        </Container>
    )
}

export default Header;

