import { Navigate, useLocation } from "react-router-dom";

import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  const location = useLocation();

  console.log(location);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
