// WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date("2023-07-25")

// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }

// export default CountDown


// WITHOUT A LIBRARY
"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Set the target date to the last day of next month
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), today.getMonth() + 2, 0, 23, 59, 59).getTime(); // Last day of next month at 23:59:59

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the timer on unmount
  }, [calculateTimeLeft]); // Run once on mount

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </span>
  );
};

export default CountDown;
