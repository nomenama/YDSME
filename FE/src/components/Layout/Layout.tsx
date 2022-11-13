import Announcement from 'components/Announcement/Announcement';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import {MainNavigation, MemberNavigation} from 'components/Header/Navigation';
import React from 'react';
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import GlobalStyles from 'styles/Global';
import {theme} from 'styles/theme';
import {useDevice} from "../../hooks/useDevice";

export const DefaultLayout = () => {
    const {isDesktop} = useDevice();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header navigations={MainNavigation} includeLoginButton={true}/>
            {!isDesktop && <Announcement/>}
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
};

export const MemberLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header navigations={MemberNavigation} includeLogoutButton={true}/>
            <GlobalStyles/>
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
};

export const UnhandledLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Outlet/>
        </ThemeProvider>
    );
};
