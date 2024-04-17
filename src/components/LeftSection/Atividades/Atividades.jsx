import { useState, useEffect } from "react";
import { useContext } from "react";
import { TextoContext } from "../../contexts/textoContext";
import { v4 as uuidv4 } from "uuid";
import { CiCircleRemove, CiEdit } from "react-icons/ci";
import { BsFillSendPlusFill } from "react-icons/bs";

import "../../../../src/styles.css";

import {
  AtividadeContainer,
  AtividadesListaContainer,
  AtividadeInput,
  AtividadeItem,
  AtividadeNome,
  BotoesContainer,
  BotaoAdicionar,
  InputContainer,
} from "./Atividades.styled";

const Atividades = () => {
  const [atividades, setAtividade] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const {
    value,
    setValue,
    atividadesLista,
    setAtividadesLista,
    currentActivityIndex,
    setCurrentActivityIndex,
  } = useContext(TextoContext);

  useEffect(() => {
    const listaDeAtividades =
      JSON.parse(localStorage.getItem("ListaDeAtividas")) || [];
    setAtividadesLista(listaDeAtividades);
  }, []);

  function ExcluirItem(id) {
    const novaListaAtividades = atividadesLista.filter(
      (atividade) => atividade.id !== id
    );
    setAtividadesLista(novaListaAtividades);
    localStorage.setItem(
      "ListaDeAtividas",
      JSON.stringify(novaListaAtividades)
    );
    localStorage.removeItem(`content${id}`);
  }

  function EditarItem(id, atividade) {
    const novoValor = prompt("Digite o novo titulo:", atividade);
    if (novoValor && novoValor.trim() !== "") {
      const novaListaAtividades = atividadesLista.map((a) =>
        a.id === id ? { ...a, text: novoValor } : a
      );
      setAtividadesLista(novaListaAtividades);
      localStorage.setItem(
        "ListaDeAtividas",
        JSON.stringify(novaListaAtividades)
      );
    }
  }

  function AdicionarAtividade() {
    if (
      atividades.trim() !== "" &&
      !atividadesLista.some((a) => a.text === atividades)
    ) {
      const novaListaAtividades = [
        ...atividadesLista,
        { id: uuidv4(), text: atividades },
      ];

      setAtividadesLista(novaListaAtividades);

      localStorage.setItem(
        "ListaDeAtividas",
        JSON.stringify(novaListaAtividades)
      );

      setAtividade("");
    }
  }

  function CarregarTexto(id) {
    const content = localStorage.getItem(`content${id}`);
    if (content) {
      setValue(JSON.parse(content));
    }
    if (content === null) {
      setValue("");
    }

    const index = atividadesLista.findIndex((a) => a.id === id);
    setCurrentActivityIndex(index);
  }

  const atividadesFiltradas = atividadesLista.filter((atividade) =>
    atividade.text.toLocaleLowerCase().includes(atividades.toLocaleLowerCase())
  );

  return (
    <AtividadeContainer>
      <InputContainer>
        <AtividadeInput
          type="text"
          value={atividades}
          placeholder="Adicione ou Pesquise um Tema"
          onChange={(ev) => setAtividade(ev.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              AdicionarAtividade();
            }
          }}
        />

        <BotaoAdicionar onClick={AdicionarAtividade}>
          <BsFillSendPlusFill />
        </BotaoAdicionar>
      </InputContainer>

      <AtividadesListaContainer>
        {atividadesFiltradas.map((atividade) => (
          <AtividadeItem
            key={atividade.id}
            $isSelected={atividade.id === selectedId}
            onClick={() => {
              CarregarTexto(atividade.id);
              setSelectedId(atividade.id);
            }}
          >
            <AtividadeNome>{atividade.text}</AtividadeNome>
            <BotoesContainer>
              <CiCircleRemove
                className="botaoRemover"
                size="1.5em"
                onClick={() => {
                  ExcluirItem(atividade.id);
                }}
              ></CiCircleRemove>

              <CiEdit
                size="1.5em"
                className="botaoEditar"
                onClick={() => {
                  EditarItem(atividade.id, atividade.text);
                }}
              ></CiEdit>
            </BotoesContainer>
          </AtividadeItem>
        ))}
      </AtividadesListaContainer>
    </AtividadeContainer>
  );
};

export default Atividades;
