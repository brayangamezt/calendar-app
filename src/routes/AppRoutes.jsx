import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { LoginPage, Register } from '../auth';
import { CalendarPage, DashboardPage } from '../calendar';
import { AccesRoute } from './AccesRoute';

export const AppRoutes = () => {

  //LAS PALABRAS DE ACCESO ESTAN EN EL DOCUMENTO AccessRoute
  
  const routes = createBrowserRouter([
    {
      path:'login',
      element: <LoginPage/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'/',
      element: <AccesRoute/>,
      children:[
        {
          path:'',
          element:<CalendarPage/>
        },
        {
          path:'Dashboard',
          element:<DashboardPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}
