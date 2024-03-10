import { PrismaCarsRepository } from "@/repositories/prisma/prisma-cars-repository"
import { GetCarDetailUseCase } from "../get-car-detail"

export function makeGetCarDetailUseCase() {
  const carsRepository = new PrismaCarsRepository()
  const getCarDetailUseCase = new GetCarDetailUseCase(carsRepository)


  return getCarDetailUseCase
}