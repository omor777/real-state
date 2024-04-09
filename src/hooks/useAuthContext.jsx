import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
