import { interfaceDocente, interfaceEstudante} from "../Interfaces/interfaces";

export class Turma {
    protected id: string;
    protected name: string;
    protected docentes: interfaceDocente[];
    protected estudantes: interfaceEstudante[];
    protected modulo: number;

    constructor(
        id:string,
        name: string,
        docentes: interfaceDocente[],
        estudantes: interfaceEstudante[],
        modulo: number,
    ) {
        this.id = id;
        this.name = name;
        this.docentes = docentes;
        this.estudantes = estudantes;
        this.modulo = modulo;
    }

    public getId(): string{
        return this.id
    }

    public getName(): string{
        return this.name
    }

    public getDocentes(): interfaceDocente[]{
        return this.docentes
    }

    public getEstudantes(): interfaceEstudante[]{
        return this.estudantes
    }

    public getModulo(): number{
        return this.modulo
    }
    
}