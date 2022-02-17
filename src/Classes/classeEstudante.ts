import {  interfaceHobbies } from "../Interfaces/interfaces";
import { Usuario } from "./classeUsuario";

export class Estudante extends Usuario{
    protected hobbies :interfaceHobbies [];
    
    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobbies: interfaceHobbies [],
    ) {
        super(id,
            name,
            email,
            data_nasc,
            turma_id);
        this.hobbies = hobbies;
    }

    public getHobbies():interfaceHobbies [] {
        return this.hobbies
    }
}