import { Navigate, useLocation } from "react-router-dom";

import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
