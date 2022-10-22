import {
    Action,
    AUTH_USER,
    CLEAR_USER,
    MESSAGE_AUTH
} from './authTypes';

import {
    Login
} from './authInterface';

export interface PropsAuth {
    user: Object;
    status: boolean;
    message: string;
    tokenUser: string | undefined;
    obtenerUsuarioAuth?: Function;
    login(data: Login): any;
    cerrarSesion(): any
}

export const initialState: PropsAuth = {
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")?.toString() || '{}'): {},
    status: false,
    message: "",
    tokenUser: typeof window !== 'undefined' ? localStorage.getItem("token")?.toString() : '',
    login(_data){},
    cerrarSesion(){}
}

const AuthReducer = (state: PropsAuth, action: Action) => {

    switch (action.type) {

        case AUTH_USER:
            return {
                ...state,
                user: action.payload.user,
                tokenUser: action.payload.tokenUser,
                message: ""
            };
        
        case CLEAR_USER:
            localStorage.setItem("token", "");
            localStorage.setItem("user", "{}");
            return{   
                ...state,
                user: {},
                tokenUser: "",
                message: ""
            }
        
        case MESSAGE_AUTH:
            localStorage.setItem("token", "");
            localStorage.setItem("user", "{}");
            return {
                ...state,
                user: {},
                tokenUser: "",
                message: action.payload.message
            }

        default:
            return state;
    }
}

export default AuthReducer