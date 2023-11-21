import React, { useContext } from "react";
import Card from "./Card";
import { UserContext } from "./UserContext";
import CurrentUser from "./CurrentUser";

const Users = () => {
  const [user, setUser] = useContext(UserContext);
  
  return (
    <>
      {" "}
      <Card>
        <CurrentUser />
        <button onClick={()=>{setUser("ahmed")}} className="btn btn-danger p-2">Change</button>
      </Card>
    </>
  );
};

export default Users;
