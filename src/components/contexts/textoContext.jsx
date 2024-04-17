import { createContext, useState } from "react";

const TextoContext = createContext({});

const TextoProvider = ({ children }) => {
  const [atividadesLista, setAtividadesLista] = useState([]);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(null);
  const [value, setValue] = useState("");
  return (
    <TextoContext.Provider
      value={{
        value,
        setValue,
        atividadesLista,
        setAtividadesLista,
        currentActivityIndex,
        setCurrentActivityIndex,
      }}
    >
      {children}
    </TextoContext.Provider>
  );
};

export { TextoContext, TextoProvider };
