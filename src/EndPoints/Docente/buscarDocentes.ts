import { Request, Response } from "express";
import { connection } from "../../Data/connection";

//verificar resposta do postman{}
export const buscarDocente = async (req: Request, res: Response) => {

    try {

        const result = await connection.raw
            (` SELECT * FROM docente_6 `)

        res.status(200).send({  result: result[0][0] })
    }


    catch (error: any) {
        res.status(500).send(error.sqlmessage || error.message)
    }
}