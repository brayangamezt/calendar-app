import { RedirectionAuth } from '../components/RedirectionAuth';
import '../css/LoginPage.css';
import { useForm, useAuthStore } from '../../hooks';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export const FormAuth = () => {

  const registerFormFields = {
    registerName:      '',
    registerEmail:     '',
    registerPassword:  '',
    registerPassword2: '',
  }

  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange, onResetForm } = useForm( registerFormFields );
  const { startAuthRegister, errorMessage } = useAuthStore();

  useEffect( ()=>{
    if( errorMessage !== undefined ){
        Swal.fire('Error al crear usuario', errorMessage, 'error');
    }
  },[errorMessage] );

  const onAuthSubmit = (event) =>{
    event.preventDefault();
    console.log({ registerName, registerEmail, registerPassword, registerPassword2});
    console.log('Hola mundo yo soy brayan gamez y estoy probando el git reset');

    if( registerPassword !== registerPassword2 ){
      Swal.fire( 'Error en registro', 'Contrasenas no son iguales', 'error' );
      return
    }

    //Ejecuamos el HOOK para registrar usuario
    startAuthRegister( registerName, registerEmail, registerPassword );

    onResetForm();

  }


  return (
    <form className='form-auth' onSubmit={ onAuthSubmit } >
      <h2>Welcome to Calendar App <i className='fas fa-regulars fa-calendar-days '></i> </h2>
      <p> Please sign up </p>
      <input type="text" className='input-form' placeholder='Type your name' name='registerName' value={ registerName } onChange={ onInputChange } />
      <input type="text" className='input-form' placeholder='Type your email ' name='registerEmail' value={ registerEmail } onChange={ onInputChange }/>
      <input type="password" className='input-form' placeholder='Type your password from register' name='registerPassword' value={ registerPassword } onChange={ onInputChange } />
      <input type="password" className='input-form' placeholder='Confirm password' name='registerPassword2' value={ registerPassword2 } onChange={ onInputChange }  />
      <button className='auth-button' > Sign up </button>
      <div className='info-form' >
          <RedirectionAuth/>
      </div>
    </form>
  )
}
