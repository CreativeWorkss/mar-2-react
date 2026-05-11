import React from "react";

function Concert() {
  const handleClick = () => {
    console.log("handle click function");
  };
  return (
    <div>
      <button onClick={handleClick}>Function Button</button>
    </div>
  );
}

export default Concert;
