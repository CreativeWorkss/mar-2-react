import React, { useContext } from "react";
import { UserContext } from "./Login";

function LogOut(props) {
  const userName = useContext(UserContext);
  return <div>Hello User {userName}</div>;
}

export default LogOut;
