import "./Stopwatch.css";

import { useState } from "react";

import Button from "./UI-components/Button/Button";
import Label from "./UI-components/Label/Label";

import timeFormatter from "../utilies/timeFormatter";
import secondsToTime from "../utilies/secondsToTime";

import { useDispatch, useSelector } from "react-redux";

import { startCount, stopCount, resetTimer } from "../store/timer/actions";
import { addLap, resetLap } from "../store/laps/actions";

export default function Stopwatch() {
  const dispatch = useDispatch();

  const time = useSelector((state) => state.tmr.time);
  const seconds = useSelector((state) => state.tmr.seconds);
  const pauseStatus = useSelector((state) => state.tmr.pauseStatus);
  console.log({ time, pauseStatus, seconds });

  const laps = useSelector((state) => state.lpr);
  console.log(laps);

  const [timeInterval, setTimeInterval] = useState(null);

  let { h, m, s } = timeFormatter(time);

  // Start Timer

  const startTimer = () => {
    if (pauseStatus || seconds === 0) {
      setTimeInterval(setInterval(countDown, 1000));
    }
  };

  // Counting Time

  const countDown = () => {
    dispatch(startCount(secondsToTime));
  };

  // Pause Stopwatch

  const stopTimer = () => {
    clearInterval(timeInterval);
    dispatch(stopCount(secondsToTime));
  };

  // Add Laps

  const lapTimer = () => {
    if (!pauseStatus) {
      dispatch(addLap(time));
    }
  };

  // Reset Stopwatch

  const reset = () => {
    clearInterval(timeInterval);
    dispatch(resetTimer());
    dispatch(resetLap());
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
          <Button clicked={reset}> reset </Button>
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
