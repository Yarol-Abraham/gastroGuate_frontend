import { ReactElement, useEffect, useReducer } from "react";

import {
    AUTH_USER, CLEAR_USER
} from './authTypes'

import {
    Login
} from './authInterface';

import requestAxios from "../../helpers/axios";

import AuthContext from "./authContext";
import AuthReducer, { initialState } from "./authReducer";

interface props {
    children: ReactElement
}

function AuthState(props: props) 
{

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // LOGIN DE USUARIO
    async function login(data: Login) 
    {
       try {
        
        const response = await requestAxios.post("/login", data);
        
        if(Object.keys(response.data).length > 0)
        {
            localStorage.setItem("user", response.data.data);
            localStorage.setItem("token", response.data.token);
            obtenerUsuarioAuth();
        }

       } catch (error) {
            console.log(error);
            dispatch({ type: CLEAR_USER });
       }     
    }
    
    // OBTENER LOS DATOS DE LA SESION
    function obtenerUsuarioAuth() 
    {
       dispatch({
        type: AUTH_USER,
        payload: {
            user: JSON.parse(localStorage.getItem('user')?.toString() || '{}'),
            tokenUser: localStorage.getItem('token')?.toString() || ''
        }
       })
    }    

    useEffect(()=>{
        obtenerUsuarioAuth();
    }, [])

    return(
        <AuthContext.Provider
            value={{
                user: state.user,
                status: state.status,
                tokenUser: state.tokenUser,
                obtenerUsuarioAuth,
                login
            }}
        >
        {props.children}
        </AuthContext.Provider>  
    )

}

export default AuthState;