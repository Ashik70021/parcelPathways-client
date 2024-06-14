
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
import AllUsers from "../Pages/Admin Dashboard/AllUsers";
import AllDeliveryMan from "../Pages/Admin Dashboard/AllDeliveryMan";
import AdminDashboard from "../Layout/AdminDashboard";
import AllParcel from "../Pages/Admin Dashboard/AllParcel";
import DeliveryDashboard from "../Layout/DeliveryDashboard";
import MyReviews from "../Pages/DeliveryDashboard/MyReviews";
import MyDeliveryList from "../Pages/DeliveryDashboard/MyDeliveryList";
import UserDashboardHome from "../Pages/User Dashboard/UserDashboardHome";
import AdminDashboardHome from "../Pages/Admin Dashboard/AdminDashboardHome";
import DeliveryDashboardHome from "../Pages/DeliveryDashboard/DeliveryDashboardHome";


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
  // User Dashboard
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userhome',
        element: <UserDashboardHome></UserDashboardHome>,
      },
      {
        path: 'bookparcel',
        element: <BookParcel></BookParcel>,
      },
      {
        path: 'myparcel',
        element: <MyParcel></MyParcel>,
      },

    ]
  },

  // Admin Dashboard
  {
    path: 'admindashboard',
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: 'adminhome',
        element: <AdminDashboardHome></AdminDashboardHome>,
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
      {
        path: 'deliveryman',
        element: <AllDeliveryMan></AllDeliveryMan>,
      },
      {
        path: 'parcels',
        element: <AllParcel></AllParcel>,
      },
    ]
  },

  // Delivery Man Dashboard
  {
    path: 'deliverydashboard',
    element: <DeliveryDashboard></DeliveryDashboard>,
    children: [
      {
        path: 'deliveryhome',
        element: <DeliveryDashboardHome></DeliveryDashboardHome>,
      },
      {
        path: 'deliverylist',
        element: <MyDeliveryList></MyDeliveryList>,
      },
      {
        path: 'reviews',
        element: <MyReviews></MyReviews>,
      },
      
    ]
  },
]);