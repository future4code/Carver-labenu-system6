export interface interfaceEstudante {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}
 
export interface interfaceDocente {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}
export interface interfaceHobbies {
    id: string,
    nome: string,
    
}

export interface interfaceTurma {
    id: string,
    nome: string,
    modulo: Number,
}

export interface interfaceEspecialidade {
    id: string,
    nome: string,   
}