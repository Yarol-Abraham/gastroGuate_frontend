import {
    Action,
    AUTH_USER,
    REGISTER_USER,
    CLEAR_USER,
    MESSAGE_AUTH
} from './authTypes';

import {
    Login, Registrar, User
} from './authInterface';

export interface PropsAuth {
    user: User;
    status: boolean;
    message: string;
    tokenUser: string | undefined;
    obtenerUsuarioAuth?: Function;
    login(data: Login): any;
    register(data: Registrar): any;
    clearRegister(): any;
    cerrarSesion(): any
}

export const initialState: PropsAuth = {
    user: {
        id: 0,
        nombre: "",
        apellido: "",
        usuario: "",
        identificacion: "",
        idTipoUsuario: 0,
        idMunicipio: 0,
        correo: ""
    },
    status: false,
    message: "",
    tokenUser: "",
    login(_data){},
    register(data: Registrar){},
    clearRegister(){},
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

        case REGISTER_USER:
            return{
                ...state,
                status: action.payload.status
            }
        
        case CLEAR_USER:
            localStorage.setItem("token", "");
            localStorage.setItem("user", `
            {
                "id": 0,
                "nombre": "",
                "apellido": "",
                "usuario": "",
                "identificacion": "",
                "idTipoUsuario": 0,
                "idMunicipio": 0,
                "correo": ""
            }
        `);
            return{   
                ...state,
                user: {
                    id: 0,
                    nombre: "",
                    apellido: "",
                    usuario: "",
                    identificacion: "",
                    idTipoUsuario: 0,
                    idMunicipio: 0,
                    correo: ""
                },
                status: false,
                tokenUser: "",
                message: ""
            }
        
        case MESSAGE_AUTH:
            localStorage.setItem("token", "");
            localStorage.setItem("user", `
            {
                "id": 0,
                "nombre": "",
                "apellido": "",
                "usuario": "",
                "identificacion": "",
                "idTipoUsuario": 0,
                "idMunicipio": 0,
                "correo": ""
            }
        `);
            return {
                ...state,
                user: {
                    id: 0,
                    nombre: "",
                    apellido: "",
                    usuario: "",
                    identificacion: "",
                    idTipoUsuario: 0,
                    idMunicipio: 0,
                    correo: ""
                },
                status: false,
                tokenUser: "",
                message: action.payload.message
            }

        default:
            return state;
    }
}

export default AuthReducer