import React from "react";

function HOCUser(Wrapper) {
  return function NewComponent(props) {
    const upgrade = (
      <div className="hoc-user-non">
        <Wrapper {...props} />
        <h1>You are Non Premium customer</h1>
        <button>Go for Upgrade</button>
      </div>
    );
    const premium = (
      <div className="hoc-user">
        <Wrapper {...props} />
        <h1>You are Premium customer</h1>
        Faster delivery is available for you
      </div>
    );

    const value = props.isPremium ? premium : upgrade;
    console.log("i have premium", props);
    return value;
  };
}

export default HOCUser;
