import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import FreeTips from "./Pages/FreeTips";
import VIPPredictions from "./Pages/VIPPredictions";
import Payment from "./Pages/Payment";
import Results from "./Pages/Result";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/free-tips",
          element: <FreeTips/>,
        },
        {
          path: "/vip",
          element: <VIPPredictions/>,
        },
        {
          path: "/payment",
          element: <Payment/>,
        },
       {
        path: "/results",
        element: <Results/>,
       },
       {
        path: "/login",
        element: <Login/>,
       },
       {
        path: "/contact",
        element: <Contact/>,
       }
      ]
    },
    // {
    //   path: "/",
    //   element: <RequireAuth/>,
    //   loader: authGuardLoader,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Dashboard/>,
    //       loader: dashboardLoader
    //     },
    //   ]
    // }
  ])
  return (
    <RouterProvider router={router}/>
  );
}
export default App;