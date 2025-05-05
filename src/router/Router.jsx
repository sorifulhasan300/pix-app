import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Login from "../Page/Login";
import Apps from "../Page/Apps";
import AppDetails from "../Page/AppDetails";
import Authentication from "../Page/Authentication";
import Register from "../Page/Register";
import ProtectedRoute from "../PrivateRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Apps></Apps>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/appDetails/:id",
        element: (
          <ProtectedRoute>
            <AppDetails></AppDetails>
          </ProtectedRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error This page</h1>,
  },
]);

export default router;
