import styled, { keyframes } from "styled-components";

export const ContainerVideo = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000000e6;
  position: relative;
  min-width: 50vw;

  :hover .controls{
    display: flex;
  }
`;

export const Video = styled.video`
    width: 100vw;
    height: 50vh;

`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: ${(props) => props.display !== true ? "flex" : "none"};
  background-image: linear-gradient(#1f1f1f12,#11111133, #0b0b0b6d, #191818b9 );
`;

export const ContButtons = styled.div`
  width: 98%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const PlayButton = styled.button`
  background: transparent;
  border: none;
  color: #c6c5c5;
`;

const slide = keyframes`
    to {
        opacity: 1;
        transform: translateX(0px);
    }  
`

export const Volume = styled.div`
  margin-left: 20px;
  display: flex;
  color: #dbd7d7;
  align-items: center;
  gap: 20px;
  width: 70%;
  
  :hover #bar-volume{
    display: block;
    animation: ${slide} .9s forwards;
    opacity: 0;

  }
   


`;
export const VolumeBar = styled.input`
  background: #141010;
  accent-color: #5d0505;
  height: 5px;
  width: 80px;
  display: none;
/*   
  ::-webkit-slider-thumb {
 
  } */

`;
export const TimeVideo = styled.div`
  display: flex;
  color: #fffafa;
  
  
`;

export const ProgressBar = styled.input`
  accent-color: #850d0d;
  margin-top: 15px;
  width: 98%;
  height: 5px;

  ::-webkit-slider-thumb,
  ::-moz-range-thumb {
    -webkit-appearance: none;
    background: #940b0b;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`;

export const ConfigurationButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const Speed = styled.select`
    color: #dbd7d7;
    background: transparent;
    margin-left: auto;
`;

export const FullScreenButton = styled.button`
  border: none;
  background: transparent;
  color: #dbd7d7;
`;
