import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const RedirectionAuth = () => {
    const [path, setPath] = useState('')

    useEffect( ()=>{
        setPath(location.pathname);
    }, [] )

  return (
    <>
        {
            path === '/login' ? 
            <p>
                <Link to='/register' >Dont you have account ? </Link>
            </p>
            :
            <p>
                <Link to='/login' > Go to login ? </Link>
            </p>
        }
    </>
  )
}
