import {
    Action,
    AUTH_USER,
    CLEAR_USER
} from './authTypes';

export interface PropsAuth {
    user: Object;
    status: boolean;
    tokenUser: string | undefined,
    obtenerUsuarioAuth?: Function,
    login?: Function
}

export const initialState: PropsAuth = {
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")?.toString() || '{}'): {},
    status: false,
    tokenUser: typeof window !== 'undefined' ? localStorage.getItem("token")?.toString() : ''
}

const AuthReducer = (state: PropsAuth, action: Action) => {

    switch (action.type) {

        case AUTH_USER:
            return {
                ...state,
                user: action.payload.user,
                tokenUser: action.payload.tokenUser
            };
        
        case CLEAR_USER:
            localStorage.setItem("token", "");
            localStorage.setItem("user", "{}");
            return{   
                ...state,
                user: {},
                tokenUser: ""
            }

        default:
            return state;
    }
}

export default AuthReducer