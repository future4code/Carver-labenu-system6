import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const buscarEstudante = async (req: Request, res: Response) => {

    try {

        const result = await connection.raw
            (` select * from estudante_6 where nome like "%${req.params.nome}%";`)

        res.status(200).send({  result: result [0] })
    }


    catch (error: any) {
        res.status(500).send(error.sqlmessage || error.message)
    }
}
