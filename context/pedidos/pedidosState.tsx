import { useReducer, ReactElement } from "react";
import requestAxios from "../../helpers/axios";
import PedidosContext from "./pedidosContext";
import PedidosReducer, { initialState } from "./pedidosReducer";
import { pedido } from './pedidosInterface';
import { ADD_PEDIDOS } from "./pedidosTypes";

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

    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos,
                addPedido
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )

}

export default PedidosState;