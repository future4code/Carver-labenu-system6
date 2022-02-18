import { Request, Response } from "express";
import { connection } from "../../Data/connection"; 

export const mudarModulo = async (req: Request, res: Response):Promise<void> => {
    let errorCode = 500
    try {
        const {modulo} = req.body
        const id = req.params.id

        if(modulo < 0 || modulo > 6){
            errorCode = 422
            throw new Error("Não existe o módulo inserido")
        }

        if(!id){
            errorCode = 422
            throw new Error("Insira um id válido")
        }

        if (typeof modulo !== "number"){
            errorCode = 422
            throw new Error("O módulo precisa ser um número.")
        } 

        await connection("turma_6")
        .update({ modulo: modulo })
        .where({ id })

        res.status(201).send({message: "Módulo alterado com sucesso!"})
    } catch (error:any) {
        res.send({error: error.message})
    }
}