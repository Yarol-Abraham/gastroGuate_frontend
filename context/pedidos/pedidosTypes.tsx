export const GET_PEDIDOS = 'GET_PEDIDOS';
export const ADD_PEDIDOS = 'ADD_PEDIDOS';
export const CLEAR_PEDIDOS = 'CLEAR_PEDIDOS';

export type Action = 
  | { type: 'GET_PEDIDOS', payload: { pedidos: [] } }
  | { type: 'ADD_PEDIDOS', payload: { pedido: {} } }
  | { type: 'CLEAR_PEDIDOS' };