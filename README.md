## LabenuSystem:

### Documentação: https://documenter.getpostman.com/view/18386394/UVkmQH6U 

Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

## Integrantes

- Alisson Abílio
- Igor Eiiji Avelar Matsuoka
- Thamires Lippelt Vieira

## Tecnologias utilizadas

 - NodetJS
 - Typescript
 - Express
 - Knex
 - MySQL
 - JSON 

## Funcionalidades básicas:

BASE URL: 

→ Criar estudante

Método POST

Para inserir o aluno, deve-se passar o body onde todos os items são obrigatórios. De acordo com o enunciado. Caso o hobby já exista no banco, ele não será adicionado de novo, serão adicionados apenas os hobbies novos.

Body:

{
    "nome": "",
    "email": "",
    "data_nasc": "",
    "turma": "",
    "hobbies": []
}

__________________________________________________________________________

→ Criar docente

Método POST

Para inserir o professor, deve-se passar o body onde todos os items são obrigatórios. 


Body:

{
    "nome": "",
    "email": "",
    "data_nasc": "",
    "turma": "",
    "especialidades": []
}
_______________________________________________________________________________

→ Criar turma

Método POST

Para inserir uma turma, deve-se passar o body onde todos os items são obrigatórios. 

Body:

{
    "name": "",
    "modulo": 0
}

____________________________________________________________________________

→ Mudar estudante de turma

Méotodo PUT
Para trocar o aluno de turma, é necessário informar o email do aluno com a turma desejada.

Body:

{
    "email": "",
    "turma": ""
}

_______________________________________________________________________________

→ Mudar docente de turma

Método PUT
Para trocar o docente de turma, é necessário informar o email do docente com a turma desejada.

Body:

{
    "email": "",
    "turma": ""
}

_________________________________________________________________________________
 
→ Buscar estudantes através do nome

Método GET


_______________________________________________________________________________

→ Pegar todas as turmas

Método GET


_______________________________________________________________________________
 
→ Buscar todas as pessoas docentes

Método GET



