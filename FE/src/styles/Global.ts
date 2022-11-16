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
    min-height: 100vh;
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background: #3e5c8a;
    background: -webkit-linear-gradient(to right top, #7b9bd7, #89aec4, #f5efd3);
    background: linear-gradient(to right top, #80a4d9, #89aec4, #f5efd3);
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

  .Toastify__toast-container {
    font-size: 16px !important;
    font-family: "Roboto", sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
export default GlobalStyles;