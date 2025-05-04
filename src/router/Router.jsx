import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Login from "../Page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
