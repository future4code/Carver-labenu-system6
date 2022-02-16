import { Request, Response } from "express";
import { connection } from "../../Data/connection"; 
import { Turma } from "../../Classes/classeTurma";
import { interfaceDocente, interfaceEstudante, interfaceTurma } from "../../Interfaces/interfaces";

export const buscarTurma = async (req: Request, res: Response):Promise<void> => {
    try {
        const nome = req.body
        const id = Date.now().toString()
        const estudantes: interfaceEstudante[] = []
        const docentes: interfaceDocente[] = []
        const modulo = 0

        const novaTurma = new Turma(id, nome, estudantes, docentes, modulo)

        const turma: interfaceTurma = {
            id: novaTurma.getId(),
            nome: novaTurma.getName(),
            modulo: novaTurma.getModulo()
        }

        await connection("turma_6")
        .insert(turma)

        res.status(201).send({message: "Turma criada com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}