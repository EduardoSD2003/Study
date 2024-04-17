import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 1px solid white;
  padding: 10px;
`;

export const ToDoContainerLista = styled.div`
  width: 90%;
  height: 55%;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  background: radial-gradient(circle, rgba(57,62,70,1) 42%, rgba(43,47,54,1) 100%);  &::-webkit-scrollbar {
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

export const TodoEnviar = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToDoEnviarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50px;
`;

export const ToDoEnviarH1 = styled.h1`
  background-color: transparent;
  color: #d3d3d3;
`;

export const ToDoListaTexto = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  text-decoration: ${(props) => (props.checado ? "line-through" : "none")};
  text-decoration-color: ${(props) => (props.checado ? "#ff1e00" : "none")};
  color: ${(props) => (props.checado ? "#979795" : "white")};
  text-transform: capitalize;
`;

export const BotaoRemover = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  color: whitesmoke;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const ToDoListaCheck = styled.input`
  cursor: pointer;
`;

export const ToDoLista = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 16px;
`;

export const ToDoEnviarButton = styled.button`
  margin-left: 8px;
  background-color: gray;
  border: none;
  color: #D3D3D3;
  cursor: pointer;
  border-radius: 5px;

  &:hover{
    background-color: #80808096;
  } 
`

export const ToDoEnviarInput = styled.input `
  border-radius: 5px;

  &::placeholder {
    color: #0000006d;
    padding: 5px;
  }
`