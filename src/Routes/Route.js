
import React from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Categories from "../Categories/Categories";
import Dashboard from "../Dashboard/Dashboard";
import Main from "../Layout/Main";
import Profile from "../Profile/Profile";

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
        {
          path: "/categories",
          element: <Categories></Categories>
      },

    ]
  }
  

]);