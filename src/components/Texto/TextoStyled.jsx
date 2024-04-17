import styled, { keyframes } from "styled-components";

const ring = keyframes`
0% {
  width: 30px;
  height: 30px;
  opacity: 1;
}
100% {
  width: 160px;
  height: 80px;
  opacity: 0;
}
`;

export const TextoEstilizado = styled.div`
  height: 90vh;
  width: 85vh;
`;

export const BotoesContainerTexto = styled.div`
  display: flex;
  margin-left: 30vw;
`;

export const BotaoSalvar = styled.button`
  margin-left: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;  
  min-width: 100px;
  min-height: 30px;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: ${props => props.baixar ? "#167EF2" : "#25ae5b"};
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  );
  border: none;
  border-radius: 100px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  &::before {
    content: "";
    border-radius: 100px;
    min-width: calc(100px + 12px);
    min-height: calc(30px + 12px);
    border: 6px solid #00ffcb;
    box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    color: ${props => props.baixar ? "#167EF2" : "#25ae5b"};
    transform: translateY(-6px);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 100%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
  }
`;
