import React, { useState, useEffect } from "react";
import { UserContext } from "../utils/userContext";

const Layout = ({ children }) => {
  const [state, setState] = useState({
    user: false,
    userID: "",
    email: "",
    name: "",
    token: false,
    overlay: false,
  });

  useEffect(() => {
    if (state.user === false) {
      console.log("user not found!!");
    }

    if (state.user) {
      console.log("user", state);
    }
  }, [state]);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
