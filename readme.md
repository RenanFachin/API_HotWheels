# Instalar dependências
npm i

# Inicializar o container
docker compose up -d

# Criar as tabelas do banco de dados (em desenvolvimento)
npx prisma migrate dev

# Criar as tabelas do banco de dados (em produção)
npx prisma migrate deploy