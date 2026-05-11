import React from "react";
import HOCUser from "./HOCUser";

function NormalUser(props) {
  return <h1>Do shopping {props.name}</h1>;
}

export default HOCUser(NormalUser);
