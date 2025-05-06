import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import Loader from "../Components/Loader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
