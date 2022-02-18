import { Request, Response } from 'express'
import { connection } from '../../Data/connection'

//fazer verificação dos nomes e teste no postman
export const mudarDocenteTurma = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    const { email, turma } = req.body

    try {

        if (!email || !turma) {
            throw new Error('Por favor preencha o email e turma')
        }

        const validarEmail = await connection('docente_6').where("email", email)

        if (!validarEmail.length) {
            throw new Error("Email inválido")
        }

        const validarTurma = await connection('turma_6').where("name", "like", `${turma}%`)

        if (!validarTurma.length) {
            throw new Error('Turma inválida')
        } else {
            await connection('docente_6').where("email", email).update('turma_id', validarTurma[0].id)
            res.status(200).send('Alteração realizada com sucesso')
        }

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}