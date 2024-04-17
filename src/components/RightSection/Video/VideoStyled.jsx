import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const VideoLabel = styled.label`
  font-size: 16px;
  background-color: transparent;
  color: #D3D3D3;

`;

export const VideoLink = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding-left: 5px;
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const VideoStyled = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0000006f;
  border-bottom: 1px solid white;
`;

export default VideoStyled;
