import { ReactElement, useReducer, useEffect } from "react";
import requestAxios from "../../helpers/axios";
import PlatillosContext from "./platillosContext";
import PlatillosReducer,{ initialState } from "./platillosReducer";

import { GET_PLATILLOS, CLEAR_PLATILLOS } from "./platillosTypes";
import { filterCategoria } from '../categorias/categoriasInterface';

interface props { children: ReactElement }

function PlatillosState(props: props) 
{

    const [ state, dispatch ] = useReducer(PlatillosReducer,initialState);

    // OBTENER TODOS LOS PLATILLOS
    async function getPlatillos({ id_categoria }: filterCategoria) 
    {
        try {
            
            const data = await requestAxios.get(`/platillos/0/${id_categoria}`);
            
            dispatch({
                type: GET_PLATILLOS,
                payload: {
                    platillos: data.data.data
                }
            })

        } catch (error) {
            dispatch({ type: CLEAR_PLATILLOS })
        }    
    }

    useEffect(()=> {
        getPlatillos({ id_categoria: 0 });
    }, [])

    return (
        <PlatillosContext.Provider
            value={{
                platillos: state.platillos,
                getPlatillos
            }}
        >
            {props.children}
        </PlatillosContext.Provider>
    )
    
}

export default PlatillosState;