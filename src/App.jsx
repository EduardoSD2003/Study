import { DivContainer } from "./MainStyles";
import LeftSection from "./components/LeftSection/LeftSection";
import Texto from "./components/Texto/Texto"
import RightSection from "./components/RightSection/RightSection";
import { TextoProvider } from "./components/contexts/textoContext";

import "./styles.css";

function App() {
  return (
    <DivContainer>
      <TextoProvider>
        <LeftSection />
        <Texto />
      </TextoProvider>
      <RightSection />
    </DivContainer>
  );
}

export default App;
