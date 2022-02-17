import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import { createTurma } from "./EndPoints/Turma/createTurma";
import { createEstudante } from "./EndPoints/Estudante/createEstudante";
import { createDocente } from "./EndPoints/Docente/createDocente";
import { buscarTurma } from "./EndPoints/Turma/buscarTurma";
import { mudarModulo } from "./EndPoints/Turma/mudarModulo";

const app: Express = express();

app.use(express.json());
app.use(cors());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.post("/create/turma", createTurma)
app.post("/create/estudante", createEstudante)
app.post("/create/docente", createDocente)
app.get("/turma", buscarTurma)




app.put("/turma/:id/modulo", mudarModulo)