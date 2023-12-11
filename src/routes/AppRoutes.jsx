import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { LoginPage, Register } from '../auth';
import { CalendarPage, DashboardPage } from '../calendar';
import { AccesRoute } from './AccesRoute';

export const AppRoutes = () => {

  // const routes = createBrowserRouter([
  //   createRoutesFromElements(
  //     <>
  //     <Route path="/login" element={<LoginPage/>} />
  //     <Route path="/register" element={<Register/>} />
  //     <Route path="/" element={<AccesRoute/>}>
  //       <Route path="calendar" element={ <CalendarPage/> } />
  //       <Route path="dashboard" element={ <DashboardPage/> } />
  //     </Route>
  //     </>
  //   )
  // ]);

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
