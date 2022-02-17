import { interfaceEspecialidade } from "../Interfaces/interfaces";
import { Usuario } from "./classeUsuario";

export class Docente extends Usuario{
    protected especialidades: interfaceEspecialidade [];
    
    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        especialidades: interfaceEspecialidade [],
    ) {
        super(id,
            nome,
            email,
            data_nasc,
            turma_id);
        this.especialidades = especialidades;
    }

    public getEspecialidades(): interfaceEspecialidade []{
        return this.especialidades
    }
}