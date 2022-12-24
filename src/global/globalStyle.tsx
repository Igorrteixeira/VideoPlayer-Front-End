import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    box-sizing: border-box;
    }
    button,select,input{
      cursor: pointer; 
    }
  
    `;
export default GlobalStyle