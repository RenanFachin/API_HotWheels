import { CarsRepository } from "@/repositories/interfaces/cars-repository";
import { Car } from "@prisma/client";

interface ListAllCarsRequest {
  userId: string
}

interface ListAllCarsResponse {
  cars: Car[]
}

export class ListAllCarsUseCase {
  constructor(private carsRepository: CarsRepository) { }

  async execute({ userId }: ListAllCarsRequest): Promise<ListAllCarsResponse> {
    const cars = await this.carsRepository.listAll(userId)

    return { cars }
  }
}