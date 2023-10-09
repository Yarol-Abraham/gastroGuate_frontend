export const GET_PEDIDOS = 'GET_PEDIDOS';
export const ADD_PEDIDOS = 'ADD_PEDIDOS';
export const UPDATE_PEDIDOS = 'UPDATE_PEDIDOS';
export const DELETE_PEDIDOS = 'DELETE_PEDIDOS';
export const TOTAL_PEDIDOS = 'TOTAL_PEDIDOS';
export const UPDATE_DATA_PEDIDOS = 'UPDATE_DATA_PEDIDOS';
export const SUCCESS_PEDIDO = 'SUCCESS_PEDIDO';
export const CLEAR_PEDIDOS = 'CLEAR_PEDIDOS';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

import { pedido } from "./pedidosInterface";

export type Action = 
  | { type: 'GET_PEDIDOS', payload: { pedidos: Array<pedido> } }
  | { type: 'ADD_PEDIDOS', payload: { pedido: pedido } } 
  | { type: 'UPDATE_PEDIDOS', payload: { pedido: pedido } }
  | { type: 'DELETE_PEDIDOS', payload: { id_platillo: number } }
  | { type: 'TOTAL_PEDIDOS' }
  | { type: 'UPDATE_DATA_PEDIDOS', payload: { pedido: pedido } }
  | { type: 'SUCCESS_PEDIDO' }
  | { type: 'CLEAR_MESSAGE' }
  | { type: 'CLEAR_PEDIDOS' };