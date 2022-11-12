import React from 'react';
import {ThemeProvider} from "styled-components";
import MainPage from './pages/MainPage/Main';
import Visitors from "./pages/Visitors/Visitors";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/Global";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MainNavigation} from "./components/Header/Navigation";
import Header from "./components/Header/Header";
import Announcement from "./components/Announcement/Announcement";
import {useDevice} from "./hooks/useDevice";
import ClubHistory from "./pages/ClubHistory/ClubHistory";
import Footer from 'components/Footer/Footer';
import HireUs from "./pages/HireUs/HireUs";
import Contact from "./pages/Contacts/Contact";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    const {isDesktop} = useDevice();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <Header logo={"Logo"} navigations={MainNavigation}/>
                {!isDesktop && <Announcement/>}
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/visitor" element={<Visitors/>}/>
                    <Route path="/calendar"/>
                    <Route path="/gallery"/>
                    <Route path="/club-history" element={<ClubHistory/>}/>
                    <Route path="/hire-us" element={<HireUs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<Login/>}/>

                    //member only routes
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Router>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
