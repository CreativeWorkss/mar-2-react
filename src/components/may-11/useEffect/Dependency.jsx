import React, { useEffect, useState } from "react";

function Dependency() {
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0);

  useEffect(() => {
    setCalculate(count * 2);
  }, [count]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Count value : {count}</h1>
      <h3>Calculate value : {calculate}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Dependency;
