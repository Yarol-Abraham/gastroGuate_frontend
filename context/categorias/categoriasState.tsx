import { ReactElement, useEffect, useReducer } from "react";

import requestAxios from "../../helpers/axios";

import { GET_GATEGORIAS, CLEAR_GATEGORIAS } from './categoriasTypes';

import CategoriasContext from "./categoriasContext";
import CategoriasReducer, { initialState } from "./categoriasReducer";

interface props {
    children: ReactElement
}

function CategoriasState(props: props) 
{

    const [ state, dispatch ] = useReducer(CategoriasReducer, initialState);

    // OBTENER LAS CATEGORIAS
    async function getCategorias() 
    {
        try {
            const data = await requestAxios.get("/categorias");

            dispatch(
                {
                    type: GET_GATEGORIAS,
                    payload: {
                        categorias: data.data.data
                    }
                }
            )
            
        } catch (error) {
            dispatch({ type: CLEAR_GATEGORIAS })
        }
    }

    useEffect(()=>{ 
        getCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias: state.categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasState