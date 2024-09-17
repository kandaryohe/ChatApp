import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "./AuthService";

const LoggedInRoute = () => {
  const user = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate replace to={"/login"}></Navigate>;
};
export default LoggedInRoute;
