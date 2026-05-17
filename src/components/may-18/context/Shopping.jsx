import React from "react";
import LogOut from "./LogOut";

function Shopping(props) {
  return (
    <div>
      <LogOut user={props.user} />
    </div>
  );
}

export default Shopping;
