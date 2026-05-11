import React from "react";

function HOCComponent(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc">
        <Wrapper {...props} />
      </div>
    );
  };
}

export default HOCComponent;
