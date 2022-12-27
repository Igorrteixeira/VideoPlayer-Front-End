import styled, { keyframes } from "styled-components";

type Screen = {
  screen: boolean;
};

type Display = {
  display: boolean;
};

const slide = keyframes`
    to {
        opacity: 1;
        transform: translateX(0px);
    }  
`;

export const ContainerVideo = styled.section<Screen>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 65vw;
  height: ${(props) => (props.screen !== false ? "98vh" : "auto")};
  width: ${(props) => (props.screen !== false ? "98vw" : "auto")};

  :hover .controls {
    display: flex;
    animation: ${slide} 1.1s forwards;
    opacity: -1;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const Controls = styled.div<Display>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0px;

  width: 100%;
  display: ${(props) => (props.display ? "flex" : "none")};
  background-image: linear-gradient(#1f1f1f12, #11111133, #0b0b0b6d, #191818b9);
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

export const ButtonsLeft = styled.div`
  margin-left: 20px;
  display: flex;
  color: #dbd7d7;
  align-items: center;
  gap: 5px;
  width: 70%;
`;
export const Volume = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  :hover #bar-volume {
    display: block;
    animation: ${slide} 0.9s forwards;
    opacity: 0;
  }
`;
export const VolumeBar = styled.input`
  background: #141010;
  accent-color: #5d0505;
  height: 5px;
  width: 80px;
  display: none;
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

export const ButtonsRigth = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  gap: 10px;
`;

export const Speed = styled.select`
  color: #f6f6f6;
  background: transparent;
  margin-left: auto;
  height: 20px;

  option {
    background-color: black;
    position: absolute;
  }
`;

export const FullScreenButton = styled.button`
  border: none;
  background: transparent;
  color: #dbd7d7;
`;
