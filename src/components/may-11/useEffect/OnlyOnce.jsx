import React, { useEffect, useState } from "react";

function OnlyOnce() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Count value : {count}</h1>
    </div>
  );
}

export default OnlyOnce;
