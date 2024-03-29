import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserProvider} from "./context/UserProvider";
import {ContentProvider} from "./context/ContentProvider";
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';
import GlobalStyles from 'styles/Global';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <ContentProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/*" element={<App/>}/>
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </ContentProvider>
        </ThemeProvider>
        <ToastContainer/>
    </>
);
