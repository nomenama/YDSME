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
import {Link as ExternalLink} from "../../common/index.styles";
import Drawer from "../Drawer/Drawer";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import {logout} from "../../api/api";
import useUser from "../../hooks/useUser";
import {ToastInfo} from "../../common/Toast";

interface HeaderProps {
    includeLoginButton?: boolean;
    includeDrawerButton?: boolean;
    navigations: typeof MainNavigation | typeof MemberNavigation;
}

const Header: React.FC<HeaderProps> = ({navigations, includeLoginButton = false, includeDrawerButton = false}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [displayMobileNavBar, setDisplayMobileNavBar] = useState<boolean>(false);
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const {isLoggedIn, setUser} = useUser();

    const onToggleSideBar = () => {
        setDisplayMobileNavBar((prev) => !prev);
    }

    const handleLogout = () => {
        void logout();
        setUser([]);
        ToastInfo("Logged out")
        navigate("/", {replace: true});
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
                                <PrimaryButton>{isLoggedIn ? "Dashboard" : "Login"}</PrimaryButton>
                            </Link>
                        </>
                    )}

                    {includeDrawerButton && (
                        <DrawerHamburger size={25} onClick={() => setDisplayDrawer((prevState) => !prevState)}/>

                    )}
                </NavContainer>

                <Hamburger size={30} onClick={onToggleSideBar}/>

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

