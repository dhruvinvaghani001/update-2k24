"use client";

import React, { useState, useEffect } from "react";

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter: React.FC = () => {
  // Set the countdown date for 20th September 2025, 9:00 AM
  const [countdownDate, setCountdownDate] = useState<number>(
    new Date("2024-09-20T09:00:00").getTime()
  );
  const [state, setState] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      setState({ days, hours, minutes, seconds });
    }
  };

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-12 text-white">
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="text-6xl font-bold">{state.days}</div>
          <small className="text-lg">Days</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">
            {formatNumber(state.hours)}
          </div>
          <small className="text-lg">Hours</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">
            {formatNumber(state.minutes)}
          </div>
          <small className="text-lg">Minutes</small>
        </div>
        <div className="text-6xl font-bold">:</div>
        <div className="text-center">
          <div className="text-6xl font-bold">
            {formatNumber(state.seconds)}
          </div>
          <small className="text-lg">Seconds</small>
        </div>
      </div>
    </div>
  );
};

export default Counter;
