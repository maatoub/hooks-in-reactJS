import React, { useState } from "react";
import Users from "./Users";
import { UserContext } from "./UserContext";

const Context = () => {
  const [user, setUser] = useState("Nasser");

  return (
    <>
      <UserContext.Provider className="container mt-5" value={{user}}>
        <Users />
      </UserContext.Provider>
    </>
  );
};

export default Context;
