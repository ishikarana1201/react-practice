import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [date, setDate] = useState(new Date());
  const refreshDate = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timer = setInterval(refreshDate, 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1 className="clock">{date.toLocaleTimeString()}</h1>
    </>
  );
};
export default DigitalClock;
