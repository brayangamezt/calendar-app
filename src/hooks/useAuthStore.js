import { useDispatch, useSelector} from "react-redux";
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () =>{

    //Accediendo a las propiedades del estado
    const {status, user, errorMessage} = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //Funcion para iniciar sesion para iniciar sesion con el backend
    const startLogin = async({ email, password }) =>{

        //Ejecutamos el reducer onChecking
        dispatch( onChecking() );

        console.log(email, password);

        try {
            
            const { data } = await calendarApi.post('/auth', {email, password});
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            console.log(data);

            //Llamar accion de onLogin y asignar nuevos valores a las propiedades del state
            dispatch( onLogin( {name: data.name, uid:data.uid} ) );


        } catch (error) {
            dispatch( onLogout( 'Credenciales incorrectas' ) );
            setTimeout( ()=>{
                dispatch( clearErrorMessage() );
            },5 );
        }
    }

    const startAuthRegister = async( name, email, password )=>{

        //Ejecutamos el checking para limpiar el estado global
        dispatch( onChecking() );

        try {
            const { data } = await calendarApi.post('/auth/new', {name, email, password});
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
    
            //Llamar accion de onLogin y asignar nuevos valores a las propiedades del state
            dispatch( onLogin( {name: data.name, uid:data.uid} ) );

        } catch (error) {
            console.error(error);
            dispatch( onLogout( error.response.data?.message || error.response.data?.errors.email.msg || 'Ocurrio un error al momento de registrar el usuario ') );
            setTimeout( ()=>{
                dispatch( clearErrorMessage() );
            },5 );

        }

    }

    //Esta funcion sirve para verificar que el token este vijente o sea valido
    const checkAuthToken = async() =>{
        const token = localStorage.getItem('token');

        if( !token ) return dispatch( onLogout(' Token expirado ') );

        try {
            const { data } = await calendarApi.get('/auth/renew');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            //Llamar accion de onLogin y asignar nuevos valores a las propiedades del state
            dispatch( onLogin( {name: data.name, uid:data.uid} ) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    return {
        //*Propiedades
        status,
        user,
        errorMessage,
    
        //*Metodos
        checkAuthToken,
        startLogin,
        startAuthRegister
    }
}