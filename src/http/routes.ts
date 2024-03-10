import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { authenticate } from './controllers/authenticate'
import { createCar } from './controllers/create-car'
import { getCarDetail } from './controllers/get-car-detail'
import { updateCar } from './controllers/update-car'

export async function appRoutes(app: FastifyInstance) {
  // Usuário
  app.post('/users', registerUser)

  // Autenticação
  app.post('/sessions', authenticate)

  // Carros
  app.post('/cars', createCar)
  app.get('/cars/:carId', getCarDetail)
  app.put('/cars/:carId', updateCar)
}
