import React from 'react'
import {ThemeProvider} from "styled-components";
import MainPage from './pages/MainPage';
import Visitors from "./pages/Visitors";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/Global";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MainNavigation} from "./components/Header/Navigation";
import Header from "./components/Header/Header";

function App() {
    return (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
              <Router>
                  <Header logo={"Logo"} navigations={MainNavigation}/>
                  <Routes>
                      <Route path="/" element={<MainPage/>} />
                      <Route path="/visitor" element={<Visitors/>} />
                      <Route path="/calendar"/>
                      <Route path="/gallery"/>
                      <Route path="/club-history"/>
                      <Route path="/hire-us"/>
                      <Route path="/contact"/>
                      <Route path="/membership"/>
                      <Route path="/login"/>
                  </Routes>
              </Router>
      </ThemeProvider>
  )
}

export default App
