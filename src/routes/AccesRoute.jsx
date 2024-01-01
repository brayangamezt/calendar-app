import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const AccesRoute = () => {

  const { checkAuthToken, status } = useAuthStore();

  useEffect( ()=>{
    checkAuthToken();
    console.log(status)
  },[] );
  

  if(status == 'not-authenticated'){
    return <Navigate to='/login' />
  }

  return  <Outlet/>
  
}
