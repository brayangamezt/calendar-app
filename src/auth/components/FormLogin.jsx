import '../css/LoginPage.css';
import { useEffect } from 'react';
import { RedirectionAuth } from './RedirectionAuth';

import { useForm, useAuthStore } from '../../hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



export const FormLogin = () => {
    const navigate = useNavigate();

    const loginFormFields = {
        loginEmail: '',
        loginPassword: ''
    }
    
    //Se renombra el onInputChange a onLoginInputChange
    const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
    
    //Importo el startLogin de los hooks
    const { startLogin, errorMessage } = useAuthStore();


    useEffect( ()=>{
        if( errorMessage !== undefined ){
            Swal.fire('Error en la autenticacion', errorMessage, 'error');
        }
    },[errorMessage] );

    //Funcion a ejecutar cuando se envia el formulario
    const onLoginSubmit = ( e ) =>{
        e.preventDefault();
        startLogin( {email:loginEmail, password:loginPassword} );
        // navigate('/');
    }

  return (
    <form className='form-auth' onSubmit={ onLoginSubmit }>

        <h2>Welcome to Calendar App <i className='fas fa-regulars fa-calendar-days '></i> </h2>
        <p> Please log-In in your account </p>

        <input type="email" className='input-form' placeholder='Type your email' name='loginEmail' value={ loginEmail } onChange={ onLoginInputChange }/>
        <input type="password" className='input-form' placeholder='Type your password' name='loginPassword' value={ loginPassword } onChange={ onLoginInputChange } />
        <button className='auth-button' > Log in </button>
        <div className='info-form' >
            <RedirectionAuth/>
        </div>

    </form>
  )
}
