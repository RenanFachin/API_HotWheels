import { PrismaCarsRepository } from "@/repositories/prisma/prisma-cars-repository"
import { DeleteCarUseCase } from "../delete-car"

export function makeDeleteCarUseCase() {
  const carsRepository = new PrismaCarsRepository()
  const deleteCarUseCase = new DeleteCarUseCase(carsRepository)


  return deleteCarUseCase
}