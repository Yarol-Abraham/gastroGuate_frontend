import { useReducer, useEffect, ReactElement } from "react";
import requestAxios from "../../helpers/axios";
import RegionesContext from "./regionesContext";
import RegionesReducer, { initialState } from "./regionesReducer";

import {
    GET_DEPARTAMENTOS,
    GET_MUNICIPIOS,
    CLEAR_MUNICIPIOS
} from './regionesType';

interface Props {
    children: ReactElement
}

function RegionesState(props: Props) 
{
    const [state, dispatch] = useReducer(RegionesReducer, initialState);

    async function getDepartamentos() 
    {
        try {

            const data = await requestAxios.get("/departamentos");
            
            dispatch({
                type: GET_DEPARTAMENTOS,
                payload:{
                    departamentos:  data.data.data
                }
            })

        } catch (error) {
            dispatch({ type: CLEAR_MUNICIPIOS });
        }
    }

    async function getMunicipios(id_departamento: number = 1) 
    {
        try {

            const data = await requestAxios.get(`/municipio/0/${id_departamento}`);
            
            dispatch({
                type: GET_MUNICIPIOS,
                payload: {
                    municipios: data.data.data
                }
            });

        } catch (error) {
            dispatch({ type: CLEAR_MUNICIPIOS });
        }
    }

    useEffect(()=>{
        getDepartamentos();
        getMunicipios();
    }, [])

    return (
        <RegionesContext.Provider
            value={{
                departamentos: state.departamentos,
                municipios: state.municipios,
                getDepartamentos,
                getMunicipios
            }}
        >
            {props.children}
        </RegionesContext.Provider>
    )


}

export default RegionesState;