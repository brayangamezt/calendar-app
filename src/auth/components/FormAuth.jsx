import { RedirectionAuth } from '../components/RedirectionAuth';
import '../css/LoginPage.css';

export const FormAuth = () => {

  return (
    <form className='form-auth'>
        <h2>Welcome to Calendar App <i className='fas fa-regulars fa-calendar-days '></i> </h2>
        <p> { location.pathname === '/login' ? 'Login with your account' : 'Please sign up' } </p>
        <input type="text" className='input-form' placeholder='Type your email'/>
        <input type="password" className='input-form' placeholder='Type your password'/>
        {
          location.pathname !== '/login'  ?
            <input type="password" className='input-form' placeholder='Confirm your password'/>
          :
          null
        }
        <button className='auth-button' > { location.pathname === '/login' ? 'Log in' : 'Sign Up' } </button>
        <div className='info-form' >
            <RedirectionAuth/>
        </div>
    </form>
  )
}
