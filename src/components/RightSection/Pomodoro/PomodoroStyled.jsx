import styled from "styled-components";
import { TbTimeDuration30, TbTimeDuration90 } from "react-icons/tb";
import { VscDebugStart } from "react-icons/vsc";
import { GoGear } from "react-icons/go";

const PomodoroStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  background-color: #00000037;
  box-sizing: border-box;
`;

export const PomodoroContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const SettingsPomodoro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 16vw;
  height: 65%;
  background-color: rgba(86, 82, 82, 0.285);

  border-radius: 10px;
`;

export const SettingsPomodoroInput = styled.input`
  width: 70%;
  padding-left: 5px;
  margin-bottom: 10px;
`;
export const SettingsPomodoroLabel = styled.label`
  width: 70%;
`;

export const SettingsPomodoroContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;

  flex-direction: column;
  width: 70%;
`;

export const BotoesPomodoroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BotoesPausasContainer = styled.div`
  display: flex;
  border: none;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTbTimeDuration30 = styled(TbTimeDuration30)`
  border-style: none;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000000;
  background-color: #B4D4FF;
  border-radius: 30%;
`;

export const StyledTbTimeDuration90 = styled(TbTimeDuration90)`
  border-style: none;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000000;
  background-color: #86B6F6;
  border-radius: 30%;
`;

export const StyledVscDebugStart = styled(VscDebugStart)`
  border-style: none;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000000;
  background-color: #176B87;
  border-radius: 30%;
`;

export const StyledGoGear = styled(GoGear)`
  border-style: none;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000000;
  border-radius: 30%;
`;

export const BotoesComandoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const BotoesComando = styled.button`
  cursor: pointer;
  width: 80px;
  height: 30px;
  background-color: #4169E1;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s; 

  &:hover {
    background-color: #6083ed; 
    color: #313133;
  }
`;

export default PomodoroStyled;
