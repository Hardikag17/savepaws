import React, { useState, useEffect } from "react";
import { getSessionStotage } from "../utils/storage";
import { UserContext } from "../utils/userContext";

const Layout = ({ children }) => {
  const [state, setState] = useState(() => getSessionStotage("state"));

  useEffect(() => {
    if (state.user === false) {
      console.log("user not found!!");
    }

    if (state.user) {
      console.log("user", state);
      sessionStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
