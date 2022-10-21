import {
     GET_PEDIDOS,
     ADD_PEDIDOS,
     CLEAR_PEDIDOS,
     Action
} from './pedidosTypes'

import { pedido } from './pedidosInterface';

export interface PropsPedidos {
    pedidos: Array<any>;
    addPedido(pedido: pedido): any
}

export const initialState:PropsPedidos = {
    pedidos: [],
    addPedido(pedido: pedido){}
}

const PedidosReducer = function (state: PropsPedidos, action: Action) 
{
    switch (action.type) {
        case GET_PEDIDOS:
            return {
                ...state,
                pedidos: action.payload.pedidos
            }

        case ADD_PEDIDOS:
            return{
                ...state,
                pedidos: [ action.payload.pedido, ...state.pedidos]
            }
        
        case CLEAR_PEDIDOS: 
            return {
                ...state,
                pedidos: []
            }
    
        default:
            return state;
    }
}

export default PedidosReducer;