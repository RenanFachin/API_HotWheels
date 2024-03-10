import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { authenticate } from './controllers/authenticate'
import { createCar } from './controllers/create-car'

export async function appRoutes(app: FastifyInstance) {
  // Usuário
  app.post('/users', registerUser)

  // Autenticação
  app.post('/sessions', authenticate)

  // Carros
  app.post('/cars', createCar)
}
