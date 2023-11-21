import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const CurrentUser = () => {
  const user = useContext(UserContext);
  console.log("user", user);
  return <div>{user}</div>;
};

export default CurrentUser;
