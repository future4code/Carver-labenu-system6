import { Request, Response } from "express";
import { connection } from "../../Data/connection"; 

export const mudarModulo = async (req: Request, res: Response):Promise<void> => {
    let errorCode = 500
    try {
        const {modulo} = req.body
        const id = req.params.id

        await connection("turma_6")
        .update({ modulo: modulo })
        .where({ id })

        res.status(201).send({message: "Módulo alterado com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}