import { Request, Response } from "express";
import { connection } from "../../Data/connection"; 
import { Turma } from "../../Classes/classeTurma";

export const buscarTurma = async (req: Request, res: Response):Promise<void> => {
    let errorCode = 500
    try {
        const turma: Turma[] = await connection("turma_6")
        .select()

        if(turma.length === 0){
            errorCode = 422
            throw new Error("Não existem turmas ativas")
        }

        res.status(201).send({turma: turma})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}