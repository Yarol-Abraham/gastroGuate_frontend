import  {
    GET_PLATILLOS,
    CLEAR_PLATILLOS,
    Action
} from './platillosTypes';

import { filterCategoria } from '../categorias/categoriasInterface';

export interface PropsPlatillos {
    platillos: Array<any>;
    getPlatillos({ id_categoria  }:filterCategoria): any
}

export const initialState: PropsPlatillos = {
    platillos: [],
    getPlatillos({ id_categoria }) {}
}

const PlatillosReducer = (state: PropsPlatillos, action: Action) => {

    switch (action.type) {
        case GET_PLATILLOS:
            return {
                ...state,
                platillos: action.payload.platillos
            }
    
        case CLEAR_PLATILLOS:
            return{
                ...state,
                platillos: []
            }

        default:
            return state;
    }

}

export default PlatillosReducer;