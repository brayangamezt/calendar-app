import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } =getEnvVariables();

const calendarApi = axios.create({
    baseURL:VITE_API_URL
});

//CONFIGURAR INTERCEPTORES: Se usa request por que estamos utilizando el interceptor para solicitudes http y no response
calendarApi.interceptors.request.use( config =>{

    config.headers = {
        ...config.headers,
        'x-token' : localStorage.getItem('token') //Cualquier peticion que se haga con el calendar API se va agregar este token
    }

    return config
} )

export default calendarApi;