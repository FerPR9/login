export interface Usuario{
    id? : number; //El signo de interrogación nos dice que el campo es opcional
    nomUsuario? : string;
    correoElectronico? : string;
    passw? : string;
    telefono? : string
}

export interface UsuarioLogin{
    correoElectronico? : string;
    passw? : string
}