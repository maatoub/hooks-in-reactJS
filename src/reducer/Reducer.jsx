import React, { useReducer } from "react";

const Reducer = () => {
  const initState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "up":
        return { count: state.count + 1 };
      case "down":
        return { count: state.count - 1 };
      case "init":
        return { count: initState.count };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        className="btn btn-info m-2"
        onClick={() => dispatch({ type: "up" })}
      >
        Up{" "}
      </button>
      <button
        className="btn btn-dark m-2"
        onClick={() => dispatch({ type: "down" })}
      >
        Down{" "}
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch({ type: "init" })}
      >
        Initialize{" "}
      </button>
    </div>
  );
};

export default Reducer;
