import React from "react";
import "./Option.css";

function Option(props) {
  console.log("i have a props", props);
  const { data, ig } = props;
  return (
    <div>
      <h1 className="para">Movie name : {data}</h1>

      <img src={ig} />
    </div>
  );
}

export default Option;
