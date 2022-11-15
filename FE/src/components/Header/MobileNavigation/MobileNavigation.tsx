import React, {Dispatch, SetStateAction} from 'react';
import {MobileNavButton, MobileNavContainer} from './MobileNavigation.styles';
import ReactDOM from "react-dom";
import {Flex, Link as ExternalLink} from "../../../common/index.styles";
import {Button, CloseNavBar} from "../Header.styles";
import {Link, useNavigate} from "react-router-dom";
import {useTheme} from "styled-components";
import {Logout} from "../../../api/api";
import {MainNavigation, MemberNavigation} from "../Navigation";

export interface MobileNavigationProps {
    navigations: typeof MainNavigation | typeof MemberNavigation;
    onToggleSideBar: () => void;
    setDisplayMobileNavBar: Dispatch<SetStateAction<boolean>>;
    includeLoginButton: boolean;
    includeDrawerButton: boolean;
    setDisplayDrawer: Dispatch<SetStateAction<boolean>>;

}

const MobileNavigation = ({
                              navigations,
                              onToggleSideBar,
                              setDisplayMobileNavBar,
                              includeLoginButton,
                              includeDrawerButton,
                              setDisplayDrawer
                          }: MobileNavigationProps) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        void Logout();
        sessionStorage.clear();
        navigate("/", {replace: true});
        window.location.reload();
    }

    return ReactDOM.createPortal(
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
                        <MobileNavButton onClick={() => setDisplayMobileNavBar(false)}>Login</MobileNavButton>
                    </Link>
                </>
            )}

            {includeDrawerButton && (
                <>
                    <MobileNavButton onClick={() => {
                        setDisplayDrawer((prevState) => !prevState);
                        setDisplayMobileNavBar(false);
                    }}>Menu</MobileNavButton>

                    <MobileNavButton onClick={() => {
                        handleLogout();
                        setDisplayMobileNavBar(false);
                    }}>Logout</MobileNavButton>
                </>
            )}
        </MobileNavContainer>,
        document.getElementById("portal") as Element
    );
};

export default MobileNavigation;