import styled from "styled-components";

export const AtividadeContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

export const AtividadesListaContainer = styled.ul`
  width: 100%;
  height: 170%;
  margin-top: 10px;
  background: radial-gradient(
    circle,
    rgba(57, 62, 70, 1) 42%,
    rgba(43, 47, 54, 1) 100%
  );
  padding: 17px;
  overflow: scroll;
  overflow-x: hidden;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #00adb5;
  }
`;

export const AtividadeInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
  padding: 5px;
  background-color: whitesmoke;
  &::placeholder {
    color: #848080;
  }
`;

export const AtividadeItem = styled.li`
  list-style: none;
  height: auto;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 0px 15px;
  border-radius: 10px;

  border: 2px solid ${(props) => (props.$isSelected ? "#1B777F" : "black")};
  background: linear-gradient(to left, #000 50%, #fff 50%);
  background-size: 200% 100%;
  background-position: ${(props) =>
    props.$isSelected ? "bottom right" : "bottom left"};
  color: ${(props) => (props.$isSelected ? "white" : "initial")};
  transition: all 0.7s ease-out;

  &:hover {
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid #1b777f;
    background-position: bottom right;
    color: white;
    transition-delay: 0.3s;
  }
`;

export const AtividadeNome = styled.p`
  width: 70%;
  height: auto;
  flex-wrap: wrap;
  word-wrap: break-word;
  background-color: transparent;
`;

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: auto;
  height: 100%;
  padding: 10px;
`;

export const BotaoAdicionar = styled.button`
  width: 35px;
  height: 30px;
  color: #2ea330;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: whitesmoke;
    background-color: #0056b3;
  }

  svg {
    background-color: transparent;

    background-color: none;
    width: 20px;
    height: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  &::placeholder {
    color: #848080;
  }
`;
