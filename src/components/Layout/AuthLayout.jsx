import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthLayout = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log("isAuthenticated", isAuthenticated);

  if (isAuthenticated) {
    return children; 
  }

  return <Navigate to="/login" />;
};

export default AuthLayout;
