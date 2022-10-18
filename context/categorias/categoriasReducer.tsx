import {
    GET_GATEGORIAS,
    CLEAR_GATEGORIAS,
    Action
} from './categoriasTypes';

export interface PropsCategorias {
    categorias: Array<any>;
}

export const initialState: PropsCategorias = {
    categorias: []
}

const CategoriasReducer = (state:PropsCategorias, action: Action) => {

    switch (action.type) {
        case GET_GATEGORIAS:
            return {
                ...state,
                categorias: action.payload.categorias
            }
        
        case CLEAR_GATEGORIAS:
            return{
                ...state,
                categorias: []
            }
    
        default:
            return state;
    }

}

export default CategoriasReducer;