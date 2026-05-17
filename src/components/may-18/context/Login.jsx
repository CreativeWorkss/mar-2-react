import React, { createContext, useState } from "react";
import LandingPage from "./LandingPage";

export const UserContext = createContext();

function Login() {
  const [userName, setUserName] = useState("David");

  return (
    <div>
      <UserContext.Provider value={userName}>
        <LandingPage user={userName} />
      </UserContext.Provider>
    </div>
  );
}

export default Login;
