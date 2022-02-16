import { Usuario } from "./classeUsuario";

export class Docente extends Usuario{
    protected especialidades: string;
    
    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        especialidades: string,
    ) {
        super(id,
            name,
            email,
            data_nasc,
            turma_id);
        this.especialidades = especialidades;
    }

    public getEspecialidades(): string{
        return this.especialidades
    }
}