import { useReducer, ReactElement } from "react";
import requestAxios from "../../helpers/axios";
import PedidosContext from "./pedidosContext";
import PedidosReducer, { initialState } from "./pedidosReducer";
import { pedido } from './pedidosInterface';
import { ADD_PEDIDOS, 
    CLEAR_MESSAGE, 
    DELETE_PEDIDOS, 
    TOTAL_PEDIDOS,  
    UPDATE_DATA_PEDIDOS,
     UPDATE_PEDIDOS,
     SUCCESS_PEDIDO, 
     CLEAR_PEDIDOS} from "./pedidosTypes";
import tokenAuth from "../../helpers/tokenAxios";

interface Props {
    children: ReactElement
}

function PedidosState(props: Props) 
{
    const [state, dispatch] =  useReducer(PedidosReducer, initialState);

    // AGREGAR UN PEDIDO A LA LISTA
    function addPedido(pedido: pedido) 
    {
        dispatch({
            type:ADD_PEDIDOS,
            payload: { pedido }
        })
    } 

    // ACTUALIZAR UN PEDIDDO EXISTENTE
    function updatePedido(pedido: pedido) 
    {
        dispatch({
            type:UPDATE_PEDIDOS,
            payload: { pedido }
        })  
    }

    // BORRAR EL MENSAJE
    function updateMessage() 
    {
      setTimeout(()=>{
        dispatch({
            type:CLEAR_MESSAGE
        })  
      }, 1000)
    }

    // ELIMINAR UN PEDIDO
    function deletePlatillo(id_platillo: number) 
    {
        dispatch({
            type:DELETE_PEDIDOS,
            payload: { id_platillo }
        })  
    }

    // TOTAL A CANCELAR POR LOS PLATILLOS
    function totalPlatillos() 
    {
        dispatch({
            type: TOTAL_PEDIDOS
        })    
    }

    // ACTUALIZAR DATA DEL PLATILLO
    function updateDataPedido(pedido: pedido) 
    {
        dispatch({
            type:UPDATE_DATA_PEDIDOS,
            payload: { pedido }
        })  
    }

     // REALIZAR PEDIDOS
    async function realizarPedido(pedidos: Array<pedido>, token: string) 
     {
        try {
            tokenAuth(token);
            for await (let data of pedidos) 
            {
                requestAxios.post("/pedidos", data);
            }

            dispatch({ type: SUCCESS_PEDIDO })

        } catch (error) {
            console.log(error);
            dispatch({ type: CLEAR_PEDIDOS })
        }
        
     }
 

    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos,
                message: state.message,
                total: state.total,
                addPedido,
                updatePedido,
                updateMessage,
                deletePlatillo,
                totalPlatillos,
                updateDataPedido,
                realizarPedido
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )

}

export default PedidosState;