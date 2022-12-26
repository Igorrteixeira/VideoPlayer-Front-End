import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left:5px;
  background-color: #000000e6;
  width: 30vw;
  height: auto;
  border-radius: 10px;
  position: relative;

  @media screen and (min-device-width : 300px) and (max-device-width : 950px) {
      width: 90vw;
}
 


`;

export const Video = styled.video`
  border-radius: 10px;
  width: 30%;
  

`;

export const Time = styled.p`
    color:white;
    position: absolute;
    padding: 2px;
    bottom:38px;
    left:18%;
    background: #151515a9;
    border-radius: 5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;

`;

export const Description = styled.p`
  color: #ffffff;
 
  
`;

export const Title = styled.p`
  color: #ffffff;
`;
