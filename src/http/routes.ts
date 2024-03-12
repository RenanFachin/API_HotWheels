import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { authenticate } from './controllers/authenticate'
import { createCar } from './controllers/create-car'
import { getCarDetail } from './controllers/get-car-detail'
import { updateCar } from './controllers/update-car'
import { deleteCar } from './controllers/delete-car'
import { ListAllCar } from './controllers/list-all-car'
import { profile } from './controllers/profile'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  // Usuário
  app.post('/users', registerUser)

  // Autenticação
  app.post('/sessions', authenticate)

  /** Authenticated routes */
  // User Profile
  app.get('/me', { onRequest: [verifyJWT] }, profile)

  // Carros
  app.post('/cars', createCar)
  app.get('/cars/:carId', getCarDetail)
  app.get('/list-car/:userId', ListAllCar)
  app.put('/cars/:carId', updateCar)
  app.delete('/cars/:carId', deleteCar)
}
