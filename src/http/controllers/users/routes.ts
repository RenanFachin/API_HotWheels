import { FastifyInstance } from 'fastify'
import { registerUser } from './register-user'
import { authenticate } from './authenticate'
import { createCar } from '../cars/create-car'
import { getCarDetail } from '../cars/get-car-detail'
import { updateCar } from '../cars/update-car'
import { deleteCar } from '../cars/delete-car'
import { ListAllCar } from '../cars/list-all-car'
import { profile } from './profile'
import { verifyJWT } from '../../middlewares/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  // Usuário
  app.post('/users', registerUser)

  // Autenticação
  app.post('/sessions', authenticate)

  /** Authenticated routes */
  // User Profile
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
