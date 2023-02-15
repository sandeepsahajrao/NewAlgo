import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!running) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
      setRunning(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    const ms = time % 1000;
    const s = Math.floor((time / 1000) % 60);
    const m = Math.floor((time / (1000 * 60)) % 60);
    const h = Math.floor((time / (1000 * 60 * 60)) % 24);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
