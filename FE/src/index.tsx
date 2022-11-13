import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserProvider} from "./context/UserProvider";
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';
import GlobalStyles from 'styles/Global';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<App/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>
);
