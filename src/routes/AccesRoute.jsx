import { Outlet, Navigate } from "react-router-dom";

export const AccesRoute = () => {
  const user = 'acceso';

  if(user !== 'acceso'){
    return <Navigate to='/login' />
  }

  return  <Outlet/>
  
}
