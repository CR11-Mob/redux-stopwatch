import { useState, useEffect } from "react";
import "./Stopwatch.css";

import Button from "./UI-components/Button/Button";
import Label from "./UI-components/Label/Label";

import timeFormatter from "../utilies/timeFormatter";
import secondsToTime from "../utilies/secondsToTime";

export default function Stopwatch() {
  const [timerObj, setTimerObj] = useState({
    time: { h: 0, m: 0, s: 0 },
    seconds: 0,
    laps: [
      { h: 0, m: 0, s: 0 },
      { h: 1, m: 1, s: 1 },
    ],
  });
  // console.log();

  const [timeInterval, setTimeInterval] = useState(0);

  const [pauseStatus, setPauseStatus] = useState(false);

  let { h, m, s } = timeFormatter(timerObj.time);

  useEffect(() => {
    // console.log(timerObj.seconds);
    console.log(timerObj.laps);
    console.log(timerObj);
    // console.log(timeInterval);
  }, [timerObj]);

  // start stopwatch
  const startTimer = () => {
    if (pauseStatus || timerObj.seconds === 0) {
      setTimeInterval(setInterval(countDown, 1000));
      setPauseStatus(false);
    }
  };

  // counting stopwatch timer
  const countDown = () => {
    let seconds = ++timerObj.seconds;
    let time = secondsToTime(seconds);
    console.log("count down", seconds);

    setTimerObj({
      ...timerObj,
      time,
      seconds,
    });
  };

  // pause stopwatch
  const stopTimer = () => {
    clearInterval(timeInterval);
    setPauseStatus(true);
  };

  const lapTimer = () => {
    if (!pauseStatus && timerObj.seconds !== 0) {
      // console.log("laps array:", timerObj.laps);
      let newlaps = [...timerObj.laps];
      newlaps.push({
        ...timerObj.time,
      });

      setTimerObj({
        ...timerObj,
        laps: newlaps,
      });
    }
  };

  // reset stopwatch
  const resetTimer = () => {
    clearInterval(timeInterval);
    setTimerObj({
      time: { h: 0, m: 0, s: 0 },
      seconds: 0,
      laps: [],
    });
  };

  return (
    <>
      <div className="stopwatch">
        <div className="timer">
          <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
        </div>
        <div className="btns">
          <Button clicked={startTimer}> start </Button>
          <Button clicked={stopTimer}> stop </Button>
          <Button clicked={lapTimer}> lap </Button>
          <Button clicked={resetTimer}> reset </Button>
        </div>
        <div className="time-laps">
          {timerObj.laps.length !== 0 &&
            timerObj.laps.map((lap, id) => {
              let { h, m, s } = timeFormatter(lap);
              return <Label key={id} lapTime={`${h}:${m}:${s}`} />;
            })}
        </div>
      </div>
    </>
  );
}
