export interface Login {
    usuario: string;
    password: string;
}

export interface Registrar {
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    passwordConfirmar: string;
    identificacion: string;
    idTipoUsuario: number;
    idMunicipio: number;
    correo: string;
}

export interface User {
    id: number,
    nombre: string;
    apellido: string;
    usuario: string;
    identificacion: string;
    idTipoUsuario: number;
    idMunicipio: number;
    correo: string;
}