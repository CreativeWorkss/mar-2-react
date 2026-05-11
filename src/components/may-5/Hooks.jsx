// why Hooks in React JS ?

// To add the feature that were present
// in class component to the functional
// component hooks was introuduced

// useState

import React, { useState } from "react";

function Hooks() {
  const [name, setName] = useState("David");

  return (
    <div>
      <h1>Hello : {name}</h1>
      <button onClick={() => setName("Johnson")}>CLick</button>
    </div>
  );
}

export default Hooks;
