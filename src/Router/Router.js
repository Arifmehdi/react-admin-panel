
import React from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "../Dashboard";
import Main from "../Layout/Main";
import Profile from "../Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children:[
        {
            path: "/",
            element: <Dashboard></Dashboard>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
        

    ]
  }
  

]);