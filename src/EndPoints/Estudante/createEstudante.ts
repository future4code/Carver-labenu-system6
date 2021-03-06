import { Request, Response } from "express";
import { Estudante } from "../../Classes/classeEstudante";
import { connection } from "../../Data/connection"; 
import { interfaceEstudante, interfaceHobbies} from "../../Interfaces/interfaces";

export const createEstudante = async (req: Request, res: Response):Promise<void> => {
    let errorCode = 500
    try {
    
        const {nome, email, data_nasc, turma_id } = req.body
        const id = Date.now().toString()
        const hobbies: interfaceHobbies[] = req.body.hobbies

        const novoEstudante = new Estudante (id, nome, email, data_nasc, turma_id, hobbies)

        const estudante: interfaceEstudante = {
            id: novoEstudante.getId(),
            nome: novoEstudante.getName(),
            email: novoEstudante.getEmail(),
            data_nasc: novoEstudante.getDataNasc(),
            turma_id: novoEstudante.getTurmaId(),
        }

        await connection("estudante_6")
        .insert(estudante)




        for (let hobbie of hobbies) {
            let hobbieId
            const [alreadyHobby] = await connection("hobby_6")
                .where({ nome: hobbie })

            if (alreadyHobby) {
                hobbieId = alreadyHobby.id
            } else {
                hobbieId = Date.now().toString()
                const novoHobbie = {
                    id: hobbieId,
                    nome: hobbie
                }
                await connection("hobby_6").insert(novoHobbie)
            }

            const estudanteHobbie = {
                id: Date.now().toString(),
                estudante_id: id,
                hobby_id: hobbieId
            }

            await connection("estudante_hobby_6").insert(estudanteHobbie)
        }


       

        res.status(201).send({message: "Aluno cadastrado com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}