import { PrismCarsRepository } from "@/repositories/prisma/prisma-cars-repository"
import { CreateCarUseCase } from "../create-car"

export function makeCreateCarUseCase() {
  const carsRepository = new PrismCarsRepository()
  const createCarUseCase = new CreateCarUseCase(carsRepository)


  return createCarUseCase
}