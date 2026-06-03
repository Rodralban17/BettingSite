import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        // {
        //   path: "/",
        //   element: <HomePage/>,
        // },
        // {
        //   path: "/track-package",
        //   element: <TrackingPage/>,
        // },
        // {
        //   path: "/about-us",
        //   element: <AboutUsPage/>,
        // },
        // {
        //   path: "/services/air-freight",
        //   element: <AirFreightPage/>,
        // },
        // {
        //   path: "/services/sea-freight",
        //   element: <SeaFreightPage/>,
        // },
        // {
        //   path: "/services/road-freight",
        //   element: <RoadFreightPage/>,
        // },
        // {
        //   path: "/services/train-freight",
        //   element: <TrainFreightPage/>,
        // },
        // {
        //   path: "/services/smart-warehousing",
        //   element: <SmartWarehousingPage/>,
        // },
        // {
        //   path: "/login",
        //   element: <LoginPage/>,
        // },
        // {
        //   path: "/register",
        //   element: <RegisterPage/>,
        // },
        // {
        //   path: "/contact-us",
        //   element: <ContactUsPage/>,
        // }
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