import { ListAllCarsUseCase } from "../list-all-cars"
import { PrismaCarsRepository } from "@/repositories/prisma/prisma-cars-repository"

export function makeListAllCarsUseCase() {
  const carsRepository = new PrismaCarsRepository()
  const listAllUseCase = new ListAllCarsUseCase(carsRepository)


  return listAllUseCase
}