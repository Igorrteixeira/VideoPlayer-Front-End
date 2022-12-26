import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 5px;
    padding: 10px;
    overflow: auto;
    position: relative;
    overflow: auto;
    width:400px;
    padding-bottom: 50px;
    @media screen and (min-device-width : 481px) and (max-device-width : 950px) {
      width: 90vw;
      
}
`

export const ButtonFilter = styled.button`
    background-color: #353434;
    color: #cccccc;
    font-size: 16px;
    width: auto;
    min-width: 90px;
    padding: 10px;
    height: 35px;
    border-radius: 5px;
    border: none;
    
`
export const ButtonLeft = styled.button`
     position:absolute;
     z-index: 1;
     left: 2vh;
`

export const ButtonRigth = styled.button`
     /* position:absolute; */
`