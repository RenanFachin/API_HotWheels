# Instalar dependências
npm i

# Inicializar o container
docker compose up -d

# Criar as tabelas do banco de dados
npx prisma migrate dev