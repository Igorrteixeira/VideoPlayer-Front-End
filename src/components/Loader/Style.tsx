import styled from "styled-components";

export const Container = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #FFF;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    top: 40%;
    left: 30%;
  
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`
