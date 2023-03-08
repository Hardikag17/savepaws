import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../utils/userContext";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    user: false,
    email: "",
    name: "",
    userPosts: [],
    token: false,
  });

  useEffect(() => {
    if (!state.loaded) {
      console.log("user not found!!");
    }

    if (state.loaded) {
    }
  }, [state, navigate, location.pathname]);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
