# Backend Challenge 🏅 2022 - Covid Daily Cases

## Descrição
Projeto desenvolvido para o desafio Codesh Cahallenge 2022 - Covid Daily Cases.

### Rotas Disponíveis:
    - [GET]/: Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"
    - [GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.
    - [GET]/cases/:date/cumulative: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.
    - [GET]/dates: Listar as datas disponíveis no dataset
    - [POST]/covidcases: rota para criar os casos de covid.
    - [POST]/database: rota para cirar o Database baseado no CSV.
    - [DELETE]/covidcases/:id: rota para deletar algum caso baseado no id.
    - [GET]/covidcases: rota para listar todos os casos do database.

## Linguagem:
    - Javascript
## Frameworks:
    - Express, Knex

## Instalação:
    comando: npm install

## Rodar APP:
    comando: npm run dev

    *OBS. PARA GERAR O BANCO DE DADOS BASEADO NO ARQUIVO ".CSV" UTILIZE A ROTA "GET/DATABASE"

This is a challenge by Coodesh