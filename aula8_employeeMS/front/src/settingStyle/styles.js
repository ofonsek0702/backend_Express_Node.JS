import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Sans-Serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    justify-content : center;
    background-color : light-blue;

  }
`;
 
export default GlobalStyle;

