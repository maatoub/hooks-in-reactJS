import React, { useContext } from "react";
import Card from "./Card";
import { UserContext } from "./UserContext";

const Users = () => {
  const user = useContext(UserContext);
  return (
    <Card>
      <h1>{user}</h1>
    </Card>
  );
};

export default Users;
