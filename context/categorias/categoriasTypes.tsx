export const GET_GATEGORIAS = 'GET_GATEGORIAS';
export const CLEAR_GATEGORIAS = 'CLEAR_GATEGORIAS';

export type Action =
    | { type: 'GET_GATEGORIAS'; payload: { categorias: [] } }
    | { type: 'CLEAR_GATEGORIAS' };
