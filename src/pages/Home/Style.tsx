import styled from "styled-components";

type Props = {
  screen:boolean
}

export const Container = styled.section<Props>`
    display: flex;
    padding: 13px;
    gap: 10px;
    background-color: #0b0b0b;
    flex-direction: ${(props) => props.screen !== false ? "column" : 'row'};

    @media screen and (min-device-width : 300px) and (max-device-width : 950px) {
      flex-direction: column;
}

    
`
export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 96vh;
    width: 40vw;
    margin-left: 15px;
    overflow: auto;
    border: 3px solid  #f00ad1;

    &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  @media screen and (min-device-width : 300px) and (max-device-width : 950px) {
      width: 95vw;
      margin:0;
}


`