import { Request, Response } from "express";
import { Docente } from "../../Classes/classeDocente";
import { connection } from "../../Data/connection";
import { interfaceDocente, interfaceEspecialidade, interfaceHobbies, interfaceTurma } from "../../Interfaces/interfaces";

export const createDocente = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {
        const { nome, email, data_nasc, turma_id, } = req.body
        const id = Date.now().toString()

        const especialidades: interfaceEspecialidade[] = req.body.especialidades
        const especialidade = {
            id: Date.now().toString(),
            nome: especialidades
        }
        await connection("especialidade_6").insert(especialidade)

        const novoDocente = new Docente(id, nome, email, data_nasc, turma_id, especialidades)

        const docente: interfaceDocente = {
            id: novoDocente.getId(),
            nome: novoDocente.getName(),
            email: novoDocente.getEmail(),
            data_nasc: novoDocente.getDataNasc(),
            turma_id: novoDocente.getTurmaId(),
        }

        await connection("docente_6")
            .insert(docente)

        res.status(201).send({ message: "Docente cadastrado com sucesso!" })
    } catch (error: any) {
        res.send({ error, message: error.message })
    }
}