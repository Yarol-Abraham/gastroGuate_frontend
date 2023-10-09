export interface departamento {
    id: number;
    nombre: string;
    abreviatura: string;
    estado: number
}

export interface municipio {
    id: number;
    nombre: string;
    abreviatura: string;
    id_departamento_id: number;
    estado: number
}