import { PrismaCarsRepository } from "@/repositories/prisma/prisma-cars-repository"
import { UpdateCarUseCase } from "../update-car"

export function makeUpdateCarUseCase() {
  const carsRepository = new PrismaCarsRepository()
  const updateCarUseCase = new UpdateCarUseCase(carsRepository)


  return updateCarUseCase
}