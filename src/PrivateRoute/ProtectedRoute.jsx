import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
