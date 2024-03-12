import { FastifyInstance } from 'fastify'
import { createCar } from './create-car'
import { getCarDetail } from './get-car-detail'
import { ListAllCar } from './list-all-car'
import { updateCar } from './update-car'
import { deleteCar } from './delete-car'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function carsRoutes(app: FastifyInstance) {

  // Habilitando para todas as rotas relacionadas aos carros precisem que o usuário esteja autenticado
  app.addHook('onRequest', verifyJWT)

  // Carros
  app.post('/cars', createCar)
  app.get('/cars/:carId', getCarDetail)
  app.get('/list-car/:userId', ListAllCar)
  app.put('/cars/:carId', updateCar)
  app.delete('/cars/:carId', deleteCar)
}
