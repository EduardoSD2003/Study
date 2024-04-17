import { useEffect, useState } from "react";
import {
  BotaoRemover,
  ToDoContainerLista,
  ToDoEnviarButton,
  ToDoEnviarContainer,
  ToDoEnviarH1,
  ToDoEnviarInput,
  ToDoLista,
  ToDoListaCheck,
  ToDoListaTexto,
  TodoContainer,
  TodoEnviar,
} from "./ToDo.styled";

function ToDo() {
  const [TodoAtividade, setTodoAtividade] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (index, isChecked) => {
    setCheckedItems({ ...checkedItems, [index]: isChecked });
  };
  
  const AdicionarToDo = () => {
    if (inputValue.trim() !== "" && !TodoAtividade.includes(inputValue)) {
      const novaLista = [...TodoAtividade, inputValue];
      setTodoAtividade(novaLista);
      localStorage.setItem("ToDoItens", JSON.stringify(novaLista));
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const novaListaToDo = [...TodoAtividade];
    novaListaToDo.splice(index, 1); // Remove o item no índice especificado

    setTodoAtividade(novaListaToDo);

    localStorage.setItem("ToDoItens", JSON.stringify(novaListaToDo));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("ToDoItens");
    if (storedTodos) {
      setTodoAtividade(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <TodoContainer>
      <ToDoEnviarContainer>
        <ToDoEnviarH1>To Do List</ToDoEnviarH1>
        <TodoEnviar>
          <ToDoEnviarInput
            type="text"
            value={inputValue}
            placeholder="Adicionar To Do"
            onChange={(ev) => setInputValue(ev.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                AdicionarToDo();
              }
            }}
          />
          <ToDoEnviarButton onClick={AdicionarToDo}>Enviar</ToDoEnviarButton>
        </TodoEnviar>
      </ToDoEnviarContainer>

      <ToDoContainerLista>
        {TodoAtividade.map((atividade, index) => (
          <ToDoLista key={index}>
            <ToDoListaCheck
              type="checkbox"
              onChange={(e) => handleCheckChange(index, e.target.checked)}
            />
            <BotaoRemover
              onClick={() => {
                removeTodo(index);
              }}
            >
              X
            </BotaoRemover>
            <ToDoListaTexto
              type="text"
              value={atividade}
              readOnly
              checado={checkedItems[index]}
            />
          </ToDoLista>
        ))}
      </ToDoContainerLista>
      
    </TodoContainer>
  );
}

export default ToDo;
