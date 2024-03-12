# API Hotwheels
Aplicação desenvolvida com a finalidade de estudo em nodeJS, docker e princípios do SOLID.
O projeto é uma API REST para que usuários possam fazer registros de carros específicos.

## Requisitos funcionais
O que é possível que o usuário faça na aplicação.

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível cadastrar um carro
- [x] Deve ser possível listar todos os carros
- [x] Deve ser possível listar os detalhes de um carro específico
- [x] Deve ser possível deletar um carro cadastrado
- [x] Deve ser possível fazer a atualização dos dados de um carro

## Regras de negócio
Determina condições que serão aplicadas para cada requisito funcional.SEMPRE é associada à um requisito funcional

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;


## Requisitos não funcionais
Requisitos que não partem do cliente, são requisitos mais técnicos. ex: Qual banco de dados será utilizado.

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistido em um banco PostgreSQL;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

## Executando o projeto
```js

// Instalar dependências
npm i

// Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

// Subir o serviço do PostgreSQL via docker
docker compose up -d

// Criar as tabelas do banco de dados (em desenvolvimento)
npx prisma migrate dev

// Criar as tabelas do banco de dados (em produção)
npx prisma migrate deploy

// Execute o projeto
npm run dev

// Visualizando o banco de dados
npx prisma studio
```

## Insomnia test
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API-hotwheels&uri=https%3A%2F%2Fraw.githubusercontent.com%2FRenanFachin%2FAPI_HotWheels%2Fmain%2Fapi-hotwheels-insomnia-export.json%3Ftoken%3DGHSAT0AAAAAABV4J7KLL3HN4TCH52ATHE6KZPPHHDQ)

## Tech

- NodeJS
- Fastify
- Prisma
- PostgreSQL
- Typescript
