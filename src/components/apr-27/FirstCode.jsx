import React from "react";
import SecondCode from "./SecondCode";

function FirstCode(props) {
  const { name } = props;
  return (
    <div>
      <h1>My First code Name : {name}</h1>
      <SecondCode />
    </div>
  );
}

export default FirstCode;
