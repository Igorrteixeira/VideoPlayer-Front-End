import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;  
    }
    button,select,input{
      cursor: pointer; 
    }
  
    `;
export default GlobalStyle