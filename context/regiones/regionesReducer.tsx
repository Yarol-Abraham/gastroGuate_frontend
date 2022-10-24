import {
    GET_DEPARTAMENTOS,
    GET_MUNICIPIOS,
    Action,
    CLEAR_MUNICIPIOS
} from './regionesType';

import {
    departamento,
    municipio
} from './regionesInterface'

export interface PropsRegiones {
    departamentos: Array<departamento>;
    municipios: Array<municipio>;
    getDepartamentos(): any,
    getMunicipios(id_departamento: number): any
}

export const initialState: PropsRegiones = {
    departamentos: [],
    municipios: [],
    getDepartamentos(){},
    getMunicipios(){}
}

function RegionesReducer(state: PropsRegiones, action: Action)
{
    switch (action.type) 
    {
        case GET_DEPARTAMENTOS:
            return {
                ...state,
                departamentos: action.payload.departamentos
            }

        case GET_MUNICIPIOS:
            return {
                ...state,
                municipios: action.payload.municipios
            }
     
        case CLEAR_MUNICIPIOS: 
            return {
                ...state,
                municipios: [],
                departamentos: []              
            }
        
        default:
            return state;
    }
}

export default RegionesReducer;