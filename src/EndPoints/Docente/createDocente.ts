import { Request, Response } from "express";
import { Docente } from "../../Classes/classeDocente";
import { connection } from "../../Data/connection";
import { interfaceDocente, interfaceEspecialidade } from "../../Interfaces/interfaces";

export const createDocente = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {

        const { nome, email, data_nasc, turma_id } = req.body
        const id = Date.now().toString()
        const especialidades: interfaceEspecialidade[] = req.body.especialidades
        const novoDocente = new Docente(id, nome, email, data_nasc, turma_id, especialidades)

        const docente: interfaceDocente = {
            id: novoDocente.getId(),
            nome: novoDocente.getName(),
            email: novoDocente.getEmail(),
            data_nasc: novoDocente.getDataNasc(),
            turma_id: novoDocente.getTurmaId()
        }

        await connection("docente_6")
        .insert(docente)

        for(let especialidade of especialidades){
            let especialidadeId
            especialidadeId = Date.now().toString()

            // const especialidadeExistente = await connection("especialidade_6")
            // .where("nome", especialidade)

            // if(especialidadeExistente){
            //     especialidadeExistente 
            // }

            // if(especialidade.nome !== "JS" && especialidade.nome !== "POO" && especialidade.nome !== "TYPESCRIPT" && especialidade.nome !== "REACT" && especialidade.nome !== "CSS"){
            //     errorCode = 422
            //     throw new Error("Insira uma especialidade pré-definida")
            // }

            const novaEspecialidade = {
                id: especialidadeId,  
                nome: especialidade
            }

            await connection("especialidade_6").insert(novaEspecialidade)

            const docenteEspecialidade = {
                id: Date.now().toString(),
                docente_id: id,
                especialidade_id: especialidadeId
            }
            await connection("docente_especialidade_6").insert(docenteEspecialidade)
        }

        res.status(201).send({message: "Docente cadastrado com sucesso"})

    } 
    catch(error : any){
        res.status(500).send(error.sqlmessage|| error.message)
    }
}    
