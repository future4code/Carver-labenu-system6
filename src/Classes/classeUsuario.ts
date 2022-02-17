export class Usuario {
    protected id: string;
    protected name: string;
    protected email: string;
    protected data_nasc: string;
    protected turma_id: string;
    
    constructor(
        id:string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }

    public getId(): string{
        return this.id
    }

    public getName(): string{
        return this.name
    }

    public getEmail(): string{
        return this.email
    }

    public getDataNasc(): string{
        return this.data_nasc
    }

    public getTurmaId(): string{
        return this.turma_id
    }
} 