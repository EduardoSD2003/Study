import Atividades from "./Atividades/Atividades";
import { AtividadeContainer } from "./Atividades/Atividades.styled";
import { LeftSectionStyledContainer } from "./LeftSection.styled";
import ToDo from "./ToDo/ToDo";


function LeftSection() {
  return  (
  <LeftSectionStyledContainer>
    <AtividadeContainer>
      <Atividades>

      </Atividades>
    </AtividadeContainer>
    <ToDo>      
    </ToDo>
  </LeftSectionStyledContainer>
  );
}

export default LeftSection;
