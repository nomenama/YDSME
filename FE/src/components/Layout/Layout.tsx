import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import {MainNavigation, MemberNavigation} from 'components/Header/Navigation';
import React from 'react';
import {Outlet} from "react-router-dom";

export const DefaultLayout = () => {
    return (
        <>
            <Header navigations={MainNavigation} includeLoginButton={true}/>
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
