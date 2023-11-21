import React, { useState } from "react";
import Users from "./Users";
import { UserContext } from "./UserContext";

const Context = () => {
  const [user, setUser] = useState("Nasser");

  const userValues =[ user, setUser] ;

  return (
    <>
      <UserContext.Provider value={userValues}>
        <Users />
      </UserContext.Provider>
    </>
  );
};

export default Context;
