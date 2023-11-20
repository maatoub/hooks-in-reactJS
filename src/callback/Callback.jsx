import React, { useCallback, useRef, useState } from "react";
import Days from "./Days";
import Years from "./Years";
import Button from "./Button";

export const Callback = () => {
  const [days, setDays] = useState(1);
  const [years, setYears] = useState(2023);
  console.log("____________________");
  const handleUpYears = useCallback(() => {
    setYears(years + 1);
  }, [years]);
  const handleUpDays = useCallback(() => {
    setDays(days + 1);
  }, [days]);
  return (
    <div className="container mt-lg-5 ">
      <Days days={days} />
      <Years years={years} />
      <div className="mt-2">
        <Button text={"days up"} action={handleUpDays} />
        <br />
        <Button text={"years up"} action={handleUpYears} />
      </div>
    </div>
  );
};
