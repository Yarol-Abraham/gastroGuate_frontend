import {
     GET_PEDIDOS,
     ADD_PEDIDOS,
     CLEAR_PEDIDOS,
     Action,
     UPDATE_PEDIDOS,
     CLEAR_MESSAGE,
     DELETE_PEDIDOS,
     TOTAL_PEDIDOS,
     UPDATE_DATA_PEDIDOS,
     SUCCESS_PEDIDO
} from './pedidosTypes'

import { pedido } from './pedidosInterface';

export interface PropsPedidos {
    pedidos: Array<pedido>,
    message: string,
    total: number,
    addPedido(pedido: pedido): any,
    updatePedido(pedido: pedido): any,
    updateMessage(): any,
    deletePlatillo(id_platillo: number): any,
    totalPlatillos(): any,
    updateDataPedido(pedido: pedido): any,
    realizarPedido(pedidos: Array<pedido>, token:string): any
}

export const initialState:PropsPedidos = {
    pedidos: [],
    message: "",
    total: 0,
    addPedido(pedido: pedido){},
    updatePedido(pedido: pedido){},
    updateMessage(){},
    deletePlatillo(id_platillo: number){},
    totalPlatillos(){},
    updateDataPedido(pedido: pedido){},
    realizarPedido(pedidos: Array<pedido>,  token:string){}
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
                pedidos: [ action.payload.pedido, ...state.pedidos],
                message: "Se ha agregado el platillo al carrito"
            }

        case UPDATE_PEDIDOS:
            return {
                ...state,                
                pedidos: [...state.pedidos.map(el => el.id_platillo == action.payload.pedido.id_platillo ? el = action.payload.pedido : el) ],
                message: "El platillo ya fue agregado, puedes verlo en tu carrito"
            }
            
        case DELETE_PEDIDOS:
            return {
                ...state,
                pedidos: [ ...state.pedidos.filter(el => el.id_platillo != action.payload.id_platillo) ]
            }

        case UPDATE_DATA_PEDIDOS:
            return{
                ...state,
                pedidos: [...state.pedidos.map(el => el.id_platillo == action.payload.pedido.id_platillo ? el = action.payload.pedido : el) ]
            }

        case TOTAL_PEDIDOS:
            return{
                ...state,
                total: [...state.pedidos].reduce( (previoValue, el) =>  previoValue + el.total, 0 )
            }

        case SUCCESS_PEDIDO:
            return {
                ...state,
                pedidos: [],
                total: 0,
                message: "se ha realizado con exito tu pedido, espera a que el vendedor se contacte contigo"
            }

        case CLEAR_MESSAGE:
            return {
                ...state,
                message: ""
            } 

        case CLEAR_PEDIDOS: 
            return {
                ...state,
                pedidos: [],
                message: "",
                total: 0
            }
    
        default:
            return state;
    }
}

export default PedidosReducer;