import React from "react";

const Days = ({ days }) => {
  console.log("rendering component Days");
  return (
    <div>
      <h3>{days}</h3>
    </div>
  );
};

export default React.memo(Days);
