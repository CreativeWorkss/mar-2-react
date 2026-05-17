import React from "react";
import Shopping from "./Shopping";

function LandingPage(props) {
  return (
    <div>
      <Shopping user={props.user} />
    </div>
  );
}

export default LandingPage;
