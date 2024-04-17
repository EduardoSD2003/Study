import { useState, useRef, useEffect, useContext } from "react";
import {
  BotaoSalvar,
  BotoesContainerTexto,
  TextoEstilizado,
} from "./TextoStyled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextoContext } from "../contexts/textoContext";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import { TfiDownload } from "react-icons/tfi";
import { MdDownloadDone } from "react-icons/md";

function Texto() {
  const quillRef = useRef(); // Cria uma ref para o editor
  const [isSaved, setIsSaved] = useState(false);

  const {
    value,
    setValue,
    atividadesLista,
    setAtividadesLista,
    currentActivityIndex,
    setCurrentActivityIndex,
  } = useContext(TextoContext);

  var toolbarOptions = [
    ["bold", "italic", "underline", "link"], // botões de alternância
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // valores personalizados de botões
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // subscrito/sobrescrito
    [{ indent: "-1" }, { indent: "+1" }], // recuo/recuo negativo
    [{ direction: "rtl" }], // direção do texto
    [{ size: ["small", false, "large", "huge"] }], // dropdown personalizado
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown com padrões do tema
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // botão para remover formatação
  ];

  function saveToLocalStorage() {
    if (currentActivityIndex !== null) {
      const editor = quillRef.current.getEditor();
      const unprivilegedEditor =
        quillRef.current.makeUnprivilegedEditor(editor);
      const content = unprivilegedEditor.getContents();
      const id = atividadesLista[currentActivityIndex].id;
      localStorage.setItem(`content${id}`, JSON.stringify(content));
      setIsSaved(true);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      saveToLocalStorage();
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  });

  async function baixar() {
    const editor = quillRef.current.getEditor();
    const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor);
    const textoSalvar = unprivilegedEditor.getContents();

    const quillToWordConfig = {
      exportAs: "blob",
    };
    const docAsBlob = await quillToWord.generateWord(
      textoSalvar,
      quillToWordConfig
    );
    saveAs(docAsBlob, "word-export.docx");
    saveToLocalStorage();
    alert("Texto salvo com Sucesso!!");
  }

  const salvar = () => {
    saveToLocalStorage();
    alert("Texto salvo com Sucesso!!");
  };

  const handleChange = (value) => {
    const editor = quillRef.current.getEditor();
    if (!editor.hasFocus()) {
      return;
    }
    setValue(value);
  };

  return (
    <TextoEstilizado>
      <BotoesContainerTexto>
        <BotaoSalvar onClick={baixar} baixar>
          Baixar <TfiDownload style={{color: "#0062ff", paddingLeft: "5px", fontSize: "12px"}}/>
        </BotaoSalvar>
        <BotaoSalvar onClick={salvar}>
          Salvar <MdDownloadDone style={{color: "#09ff00", paddingLeft: "5px", fontSize: "16px"}}/>
        </BotaoSalvar>
      </BotoesContainerTexto>
      <ReactQuill
        className="quillEditor"
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: toolbarOptions,
        }}
        readOnly={false}
        ref={quillRef}
      />
    </TextoEstilizado>
  );
}

export default Texto;
