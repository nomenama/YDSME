import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

type ThemeType = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background-color: #ffffff;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: #e0eeee;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #f2f2f5;
    border-radius: 20px;
    border: 3px solid #42abcc;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
export default GlobalStyles;