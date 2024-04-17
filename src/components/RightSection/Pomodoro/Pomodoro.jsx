import React, { useState, useEffect, useRef } from "react";
import PomodoroStyled, {
  BotoesComando,
  BotoesComandoContainer,
  BotoesPausasContainer,
  BotoesPomodoroContainer,
  PomodoroContainer,
  SettingsPomodoro,
  SettingsPomodoroContainer,
  SettingsPomodoroInput,
  SettingsPomodoroLabel,
  StyledGoGear,
  StyledTbTimeDuration30,
  StyledTbTimeDuration90,
  StyledVscDebugStart,
} from "./PomodoroStyled";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

function Pomodoro() {
  const audioRef = useRef();
  useEffect(() => {
    setHoras(localStorage.getItem("horas"));
    setMinutos(localStorage.getItem("minutos"));

    setTimeDisplay("00:00:00");

    setPausaCurtaLocal(localStorage.getItem("pausaCurtaLocal"));
    setPausaLongaLocal(localStorage.getItem("pausaLongaLocal"));
  }, []);

  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const [isPausa, setIsPausa] = useState(false);

  const [pausaCurtaLocal, setPausaCurtaLocal] = useState(0);
  const [pausaLongaLocal, setPausaLongaLocal] = useState(0);

  const [hours, setHours] = useState(localStorage.getItem("horas"));
  const [minutes, setminutes] = useState(localStorage.getItem("minutos"));
  const seconds = 0;

  const [corCronometro, setcorCronometro] = useState("");

  const [showSttings, setShowSettings] = useState(false);

  const [totalTime, setTotalTime] = useState(
    (horas * 3600 + minutos * 60 + seconds) * 1000
  );
  useEffect(() => {
    const totalTime = (horas * 3600 + minutos * 60 + seconds) * 1000;
    setRemainingTime(totalTime);
  }, [horas, minutos]);

  const [currentTime, setCurrentTime] = useState(Date.now());
  const futureTime = currentTime + totalTime;
  const [remainingTime, setRemainingTime] = useState(futureTime - currentTime);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");

  useEffect(() => {
    const totalTime = (horas * 3600 + minutos * 60 + seconds) * 1000;
    const currentTime = Date.now();
    const futureTime = currentTime + totalTime;
    const remainingTime = futureTime - currentTime;

    setRemainingTime(remainingTime);
  }, [horas, minutos]);

  const [pausaLonga, setPausaLonga] = useState(0);
  const [pausaCurta, setPausaCurta] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    setIsPausa(null);
    const endTime = Date.now() + remainingTime;
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = endTime - now;
      setRemainingTime(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeDisplay("Acabou");
        audioRef.current.play();
        setIntervalId(null);
      } else {
        const mins = Math.floor((remaining / (1000 * 60)) % 60).toLocaleString(
          "en-US",
          {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }
        );

        const secs = Math.floor((remaining / 1000) % 60).toLocaleString(
          "en-US",
          {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }
          
        );
        document.title = (`Pausa: ${mins}:${secs}`);


        if (isPausa) {
          setTimeDisplay(`${mins}:${secs}`);
        } else {
          const hrs = Math.floor(
            (remaining / (1000 * 60 * 60)) % 24
          ).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          });
          setTimeDisplay(`${hrs}:${mins}:${secs}`);
          document.title = (`Pomodoro ${hrs}:${mins}:${secs}`);
        }
      }

    }, 1000);

    setIntervalId(interval);
  };

  const pausarTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setRemainingTime(0);
    setHours(0);
    setminutes(0);
    setTimeDisplay("00:00:00");
    clearInterval(intervalId);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const salvar = () => {
    localStorage.setItem("horas", horas);
    setHours(horas);

    localStorage.setItem("minutos", minutos);
    setminutes(minutes);

    if (pausaCurta > 0) {
      localStorage.setItem("pausaCurtaLocal", pausaCurta);
      setPausaCurtaLocal(pausaCurta);
    }

    if (pausaLonga > 0) {
      localStorage.setItem("pausaLongaLocal", pausaLonga);
      setPausaLongaLocal(pausaLonga);
    }

    setHoras(0);
    setMinutos(0);
    setPausaLonga(0);
    setPausaCurta(0);
    setShowSettings(false);
  };

  const startPausaCurta = () => {
    setIsPausa(true);
    clearInterval(intervalId);
    const pausaCurtaTime = pausaCurtaLocal * 60 * 1000;
    setRemainingTime(pausaCurtaTime);
    setTotalTime(pausaCurtaTime);

    console.log(pausaCurtaTime);

    const minutosCurtaLonga = localStorage
      .getItem("pausaCurtaLocal")
      .toString()
      .padStart(2, "0");

    setTimeDisplay(`${minutosCurtaLonga}:00`);

    setcorCronometro("180, 212, 255");
    
  };

  const startPausaLonga = () => {
    setIsPausa(true);
    clearInterval(intervalId);
    const pausaLongaTime = pausaLongaLocal * 60 * 1000;
    setRemainingTime(pausaLongaTime);
    setTotalTime(pausaLongaTime);

    console.log(pausaLongaTime);

    const minutosPausaLonga = localStorage
      .getItem("pausaLongaLocal")
      .toString()
      .padStart(2, "0");

    setTimeDisplay(`${minutosPausaLonga}:00`);

    setcorCronometro("134, 182, 246");
  };

  const startPomodoro = () => {
    clearInterval(intervalId);
    const horas = parseInt(localStorage.getItem("horas"));
    const minutos = parseInt(localStorage.getItem("minutos"));
    const pomodoroStart = (horas * 60 + minutos) * 60 * 1000; // Converta as horas em minutos antes de somar

    setRemainingTime(pomodoroStart);
    setTotalTime(pomodoroStart);

    const horasInicial = Math.floor(pomodoroStart / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const minutosInicial = Math.floor(
      (pomodoroStart % (1000 * 60 * 60)) / (1000 * 60)
    )
      .toString()
      .padStart(2, "0");

    const segundosInicial = Math.floor((pomodoroStart % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    console.log(pomodoroStart);
    setTimeDisplay(`${horasInicial}:${minutosInicial}:${segundosInicial}`);

    setcorCronometro("23, 107, 135");
  };

  return (
    <>
      <PomodoroStyled>
        <PomodoroContainer>
          <BotoesPomodoroContainer>
            <BotoesPausasContainer>
              <StyledTbTimeDuration30 onClick={startPausaCurta} />

              <StyledTbTimeDuration90 onClick={startPausaLonga} />

              <StyledVscDebugStart onClick={startPomodoro} />
            </BotoesPausasContainer>

            <StyledGoGear
              onClick={() => {
                setShowSettings(showSttings ? false : true);
                pausarTimer();
              }}
            ></StyledGoGear>
          </BotoesPomodoroContainer>

          {showSttings ? (
            <>
              <SettingsPomodoro>
                <SettingsPomodoroContainer>
                  <SettingsPomodoroLabel htmlFor="horas">
                    Horas
                  </SettingsPomodoroLabel>
                  <SettingsPomodoroInput
                    type="number"
                    max={24}
                    min={0}
                    id="horas"
                    value={horas}
                    onChange={(ev) => setHoras(ev.target.value)}
                  />
                </SettingsPomodoroContainer>

                <SettingsPomodoroContainer>
                  <SettingsPomodoroLabel htmlFor="minutos">
                    Minutos
                  </SettingsPomodoroLabel>
                  <SettingsPomodoroInput
                    type="number"
                    max={59}
                    min={0}
                    id="minutos"
                    value={minutos}
                    onChange={(ev) => setMinutos(ev.target.value)}
                  />
                </SettingsPomodoroContainer>

                <SettingsPomodoroContainer>
                  <SettingsPomodoroLabel htmlFor="Paula Longa">
                    Paula Longa
                  </SettingsPomodoroLabel>
                  <SettingsPomodoroInput
                    type="number"
                    max={59}
                    min={0}
                    id="Paula Longa"
                    value={pausaLonga}
                    onChange={(ev) => setPausaLonga(ev.target.value)}
                  />
                </SettingsPomodoroContainer>

                <SettingsPomodoroContainer>
                  <SettingsPomodoroLabel htmlFor="Pausa curta">
                    Pausa curta
                  </SettingsPomodoroLabel>
                  <SettingsPomodoroInput
                    type="number"
                    max={59}
                    min={0}
                    id="Pausa curta"
                    value={pausaCurta}
                    onChange={(ev) => setPausaCurta(ev.target.value)}
                  />
                </SettingsPomodoroContainer>
              </SettingsPomodoro>

              <button onClick={salvar}>Salvar</button>
            </>
          ) : (
            <>
              <CircularProgressbarWithChildren
                value={remainingTime}
                text={timeDisplay}
                maxValue={totalTime}
                strokeWidth={10}
                styles={{
                  root: {},

                  path: {
                    stroke: `rgba(${corCronometro}, ${
                      remainingTime / totalTime
                    })`,
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },

                  trail: {
                    stroke: "#0A747A",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },

                  text: {
                    fill: "#00eeff",
                    fontSize: "16px",
                  },
                  background: {
                    fill: "#000000",
                  },
                }}
              >
                <RadialSeparators
                  count={12}
                  style={{
                    background: "#393E46",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <BotoesComandoContainer>
                <BotoesComando onClick={startTimer}>Play</BotoesComando>
                <BotoesComando onClick={pausarTimer}>Pause</BotoesComando>
                <BotoesComando onClick={resetTimer}>Resetar</BotoesComando>
              </BotoesComandoContainer>
            </>
          )}
        </PomodoroContainer>
      </PomodoroStyled>
      <audio ref={audioRef} src="/audioTempoAcabou.m4a" />
    </>
  );
}

export default Pomodoro;