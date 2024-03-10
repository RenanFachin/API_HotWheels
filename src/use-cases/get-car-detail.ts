import { CarsRepository } from "@/repositories/interfaces/cars-repository";
import { Car } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface getCarDetailRequest {
  carId: string
}

interface getCarDetailResponse {
  car: Car
}

export class GetCarDetailUseCase {
  constructor(private carsRepository: CarsRepository) { }

  async execute({ carId }: getCarDetailRequest): Promise<getCarDetailResponse> {
    const car = await this.carsRepository.findById(carId)

    if (!car) {
      throw new ResourceNotFoundError()
    }


    return {
      car
    }
  }
}