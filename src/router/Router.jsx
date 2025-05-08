import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Login from "../Page/Login";
import Apps from "../Page/Apps";
import AppDetails from "../Page/AppDetails";
import Authentication from "../Page/Authentication";
import Register from "../Page/Register";
import ProtectedRoute from "../PrivateRoute/ProtectedRoute";
import MyProfile from "../Page/MyProfile";
import Error from "../ErrorPage/Error";
import Artical from "../Artical/Artical";
import Loader from "../Components/Loader";

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
        path: "/profile",
        element: (
          <ProtectedRoute>
            <MyProfile></MyProfile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/appDetails/:id",
        element: (
          <ProtectedRoute>
            <AppDetails></AppDetails>
          </ProtectedRoute>
        ),
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/articles",
        element: <Artical></Artical>,
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
    element: <Error></Error>,
  },
]);

export default router;
