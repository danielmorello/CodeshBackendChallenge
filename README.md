# Backend Challenge 🏅 2022 - Covid Daily Cases

## Descrição
Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento. Para isso você deve executar os passos a seguir:

- Obrigatório 1 - Você deverá desenvolver as seguintes rotas:
    - [GET]/: Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"
    - [GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.
    - [GET]/cases/:date/cumulative: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.
    - [GET]/dates: Listar as datas disponíveis no dataset

-Obrigatório 2 - Para alimentar o seu banco de dados você deve criar um script para armazenar os dados do arquivo CSV que o Kaggle disponibiliza.

## Linguagem:
    - Javascript
## Frameworks:
    - Express, Knex

### Instalação:
    comando npm install