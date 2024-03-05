import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

// Conexão com o db
export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
