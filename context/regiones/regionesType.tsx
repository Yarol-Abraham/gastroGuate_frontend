import { departamento, municipio } from "./regionesInterface";

export const GET_DEPARTAMENTOS = 'GET_DEPARTAMENTOS';
export const GET_MUNICIPIOS = 'GET_MUNICIPIOS';
export const CLEAR_MUNICIPIOS = 'CLEAR_MUNICIPIOS';

export type Action = 
| { type: 'GET_DEPARTAMENTOS', payload: { departamentos: Array<departamento> } }
| { type: 'GET_MUNICIPIOS', payload: { municipios: Array<municipio> } }
| { type: 'CLEAR_MUNICIPIOS' }
