import React from "react";

const Button = ({ text, action }) => {
    console.log("rendering component Button");
  return (
    <div>
      <button className="btn btn-danger" onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default React.memo(Button);
