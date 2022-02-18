import { Request, Response } from "express";
import { Docente } from "../../Classes/classeDocente";
import { connection } from "../../Data/connection";
import { interfaceDocente, interfaceEspecialidade } from "../../Interfaces/interfaces";

export const createDocente = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {

        const { nome, email, data_nasc,turma_id } = req.body
        const id = Date.now().toString()
        const especialidades: interfaceEspecialidade[] = req.body.especialidades
        const novoDocente = new Docente(id, nome, email, data_nasc, turma_id, especialidades)


        const docente: interfaceDocente = {
            id: novoDocente.getId(),
            nome: novoDocente.getName(),
            email: novoDocente.getEmail(),
            data_nasc: novoDocente.getDataNasc(),
            turma_id:novoDocente.getTurmaId()
        }

        await connection("docente_6")
            .insert(docente)

            if (especialidades) {
                for (let specialty of especialidades) {
                    if (!specialty.nome){
                        errorCode = 422;
                        throw new Error("Each 'specialty' must received only a 'description' property! Please, check input´s values");
                    } else if (
                        specialty.nome !== "POO" &&
                        specialty.nome !== "CSS" &&
                        specialty.nome !== "JS" &&
                        specialty.nome !== "React" &&
                        specialty.nome !== "TYPESCRIPT"
                    ) {
                        errorCode = 422;
                        throw new Error (`'Specialties' only received 'Backend', 'CSS', 'Programação Orientada a Objetos',
                         'React', 'Redux', 'Testes' or 'Typescript' as value! Please, check input´s values`);
                    };
                };
            };





            // for (let especialidade of especialidades) {
            //     let especialidadeId
            //     const [existeEspecialidade] = await connection("especialidade_6")
            //     .where("nome","like","%${especialidade}%")
                
               
            //     if ([!existeEspecialidade]) {
            //        errorCode = 422 
            //        throw new Error("Inserir uma especialidade já predefinida.")
            //     }else {
            //         especialidadeId = existeEspecialidade.id
            //     }
                
                
            //     const docenteEspecialidade = {
            //         id: Date.now().toString(),
            //         docente_id: id,
            //         especialidade_id: especialidadeId
            //     }
    
            //     await connection("docente_especialidade_6").insert(docenteEspecialidade)
            // }


       

        res.status(201).send({message: "Docente cadastrado com sucesso"})

    } 
    catch(error : any){
        res.status(500).send(error.sqlmessage|| error.message)
    }
}    
