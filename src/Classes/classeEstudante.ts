import { Usuario } from "./classeUsuario";

export class Estudante extends Usuario{
    protected hobbies: string;
    
    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobbies: string,
    ) {
        super(id,
            name,
            email,
            data_nasc,
            turma_id);
        this.hobbies = hobbies;
    }

    public getHobbies(): string{
        return this.hobbies
    }
}