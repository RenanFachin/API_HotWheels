### Instalar dependências
npm i

### Inicializar o container
docker compose up -d

### Criar as tabelas do banco de dados (em desenvolvimento)
npx prisma migrate dev

### Criar as tabelas do banco de dados (em produção)
npx prisma migrate deploy

### Insomnia test
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API-hotwheels&uri=https%3A%2F%2Fraw.githubusercontent.com%2FRenanFachin%2FAPI_HotWheels%2Fmain%2Fapi-hotwheels-insomnia-export.json%3Ftoken%3DGHSAT0AAAAAABV4J7KLL3HN4TCH52ATHE6KZPPHHDQ)