import React from "react";

import HOCUser from "./HOCUser";
import NormalUser from "./NormalUser";

function PremiumUser(props) {
  return (
    <>
      <NormalUser {...props} />
    </>
  );
}

export default HOCUser(PremiumUser);
