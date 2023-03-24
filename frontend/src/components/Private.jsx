// THIS ROUTE IS TO DETERMINE IF THE USER IS AUTHENTICATED, IF NOT USER GET REDIRECTED TO `/login`
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utils/userContext";

function PrivateRoute({ children }) {
  const { state } = useContext(UserContext);

  // Add your own authentication on the below line.
  const isLoggedIn = state.user;

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
