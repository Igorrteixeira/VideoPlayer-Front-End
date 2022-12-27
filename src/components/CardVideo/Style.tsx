import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
  width: 28vw;
  height: auto;
  border-radius: 10px;
  position: relative;

  @media screen and (min-device-width: 300px) and (max-device-width: 950px) {
    width: 90vw;
  }
`;

export const Video = styled.video`
  border-radius: 10px;
  width: 30%;
`;

export const Time = styled.p`
  color: white;
  position: absolute;
  padding: 2px;
  bottom: 20%;
  left: 18%;
  background: #15151577;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

export const Description = styled.p`
  color: #6b6565;
  font-size: 14px;
`;

export const Title = styled.p`
  color: #ffffff;
`;
