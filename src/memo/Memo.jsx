import React, { useMemo, useState } from "react";

export default function Memo() {
  const [CountBtn1, setCountBtn1] = useState(0);
  const [CountBtn2, setCountBtn2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return CountBtn1 % 2 === 0;
  }, [CountBtn1]);
  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return CountBtn1 % 2 === 0;
  //   };
  const handleCountBtn1 = () => {
    const res = CountBtn1 + 1;
    setCountBtn1(res);
  };
  const handleCountBtn2 = () => {
    const res = CountBtn2 + 1;
    setCountBtn2(res);
  };

  return (
    <div className="container mt-5">
      <div>
        <button
          className="btn btn-outline-primary w-50"
          onClick={handleCountBtn1}
        >
          {CountBtn1}
        </button>
      </div>
      <h5 className="p-2">{isEven ? "Even" : "odd"}</h5>
      <div className="mt-2">
        <button className="btn btn-outline-info w-50" onClick={handleCountBtn2}>
          {CountBtn2}
        </button>
      </div>
    </div>
  );
}
