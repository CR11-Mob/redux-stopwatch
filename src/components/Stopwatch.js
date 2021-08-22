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
  });

  const [laps, setLaps] = useState([]);

  const [timeInterval, setTimeInterval] = useState(null);

  const [pauseStatus, setPauseStatus] = useState(false);

  let { h, m, s } = timeFormatter(timerObj.time);

  useEffect(() => {
    console.log(laps);
    console.log(timerObj);
  }, [timerObj, laps]);

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

  // laps

  const lapTimer = () => {
    if (!pauseStatus && timerObj.seconds !== 0) {
      let newlaps = [...laps];
      newlaps.push({
        ...timerObj.time,
      });

      setLaps(newlaps);
    }
  };

  // reset stopwatch

  const resetTimer = () => {
    clearInterval(timeInterval);

    setTimerObj({
      time: { h: 0, m: 0, s: 0 },
      seconds: 0,
    });

    setLaps([]);
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
      </div>
      <div className="time-laps">
        {laps.length !== 0 &&
          laps.map((lap, id) => {
            let { h, m, s } = timeFormatter(lap);
            return <Label key={id} lapTime={`${h}:${m}:${s}`} />;
          })}
      </div>
    </>
  );
}

// Rax's Code

// const [startTime, setStartTime] = useState(Math.floor(Date.now() / 1000));
// const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));

// useEffect(() => {
//   const seccs = currentTime - startTime;
//   setTimerObj({
//     ...timerObj,
//     time: secondsToTime(seccs),
//     seconds: seccs,
//   });
// }, [currentTime]);

// useEffect(() => {
//   setInterval(() => {
//     setCurrentTime(Math.floor(Date.now() / 1000));
//   }, 1000);
// }, []);
