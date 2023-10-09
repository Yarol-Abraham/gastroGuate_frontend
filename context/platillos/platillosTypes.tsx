export const GET_PLATILLOS = 'GET_PLATILLOS';
export const CLEAR_PLATILLOS = 'CLEAR_PLATILLOS';

export type Action = 
     | { type: 'GET_PLATILLOS', payload: { platillos: []} }
     | { type: 'CLEAR_PLATILLOS'}