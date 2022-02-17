import { application, Request, Response } from "express";
import { connection } from "../../Data/connection";


export const mudarTurma = async (req:Request, res:Response)=>{
    try{

        const result = await connection.raw
        (`update estudante_6 
        set turma_id = "${req.body.id}"
        where id = "${req.params.id}; `)

        res.status(200).send({result: result [0]})
    }
    catch(error: any){
        res.status(500).send(error.sqlmessage || error.message)
    }
}