import { PrismaCarsRepository } from "@/repositories/prisma/prisma-cars-repository"
import { CreateCarUseCase } from "../create-car"

export function makeCreateCarUseCase() {
  const carsRepository = new PrismaCarsRepository()
  const createCarUseCase = new CreateCarUseCase(carsRepository)


  return createCarUseCase
}