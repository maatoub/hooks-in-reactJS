import React, { useReducer } from "react";

const Exercise = () => {
  const initState = {
    username: "",
    email: "",
    phone: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initState;
      default:
        return state;
    }
  };

  const getAttribute = (name, val) => {
    // console.log(name, " ", val);
    dispatch({ type: "update", field: name, value: val });
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(state.email + "\n" + state.username + "\n" + state.phone);
    return state;
  };
  return (
    <div className="d-flex  justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className=" bg-dark-subtle p-5">
        <div className="form-outline mb-4">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={state.username}
            className="form-control"
            onChange={(e) => getAttribute(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            className="form-control"
            onChange={(e) => getAttribute(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={state.phone}
            className="form-control"
            onChange={(e) => getAttribute(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-4 d-flex justify-content-between">
          <button type="submit" className="btn btn-outline-dark ">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Exercise;
