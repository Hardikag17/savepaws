import React, { useState, useEffect } from "react";
import { UserContext } from "../utils/userContext";

const Layout = ({ children }) => {
  const [state, setState] = useState({
    user: false,
    email: "",
    name: "",
    userPosts: [],
    token: false,
  });

  useEffect(() => {
    if (state.loaded == false) {
      console.log("user not found!!");
    }

    if (state.loaded) {
      console.log("user", state.email);
    }
  }, [state]);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
