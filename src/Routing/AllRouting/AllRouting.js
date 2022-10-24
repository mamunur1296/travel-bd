import { createBrowserRouter } from "react-router-dom";
import Booking from "../../Pages/Booking";
import Catagory from "../../Pages/Catagory";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Regester from "../../Pages/Regester";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/catagory"),
        element: <Home></Home>,
      },
      {
        path: "/catagory/:id",
        element: <Catagory></Catagory>,
      },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
]);
