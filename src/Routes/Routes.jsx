
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Secret from "../Pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import BookParcel from "../Pages/User Dashboard/BookParcel";
import MyParcel from "../Pages/User Dashboard/MyParcel";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/secret',
            element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'bookparcel',
          element: <BookParcel></BookParcel>,
        },
        {
          path: 'myparcel',
          element: <MyParcel></MyParcel>,
        },
      ]
    }
  ]);