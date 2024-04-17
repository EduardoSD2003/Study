import Pomodoro from "./Pomodoro/Pomodoro";
import { RightSectionStyled } from "./RightSectionStyled";
import Video from "./Video/Video";

function RightSection() {
  return (
    <RightSectionStyled>
      <Video />
      <Pomodoro />
    </RightSectionStyled>
  );
}

export default RightSection;
