import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Pages/Home";
import Menu from "../components/Pages/Menu/Menu";
import Order from "../components/Pages/Order/Order";
import Login from "../components/Pages/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path: 'orderFood/:category',
          element: <Order></Order>
        },
        {
          path: 'orderFood',
          element: <Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
   
  ])