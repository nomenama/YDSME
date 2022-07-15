import React from 'react'
import {ThemeProvider} from "styled-components";
import MainPage from '../src/pages/index'
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/Global";

function App() {

    return (
      <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <MainPage />
          </>
      </ThemeProvider>
  )
}

export default App
