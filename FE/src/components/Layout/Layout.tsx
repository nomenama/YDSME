import Announcement from 'components/Announcement/Announcement';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import {MainNavigation, MemberNavigation} from 'components/Header/Navigation';
import React from 'react';
import {Outlet} from "react-router-dom";
import {useDevice} from "../../hooks/useDevice";

export const DefaultLayout = () => {
    const {isDesktop} = useDevice();

    return (
        <>
            <Header navigations={MainNavigation} includeLoginButton={true}/>
            {!isDesktop && <Announcement/>}
            <Outlet/>
            <Footer/>
        </>
    );
};

export const MemberLayout = () => {
    return (
        <>
            <Header navigations={MemberNavigation} includeDrawerButton={true}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export const UnhandledLayout = () => {
    return (
        <Outlet/>
    );
};
