import { CarsRepository } from "@/repositories/interfaces/cars-repository";
import { CarDoesNotExistsError } from "./errors/car-does-not-exists-error";

interface deleteCarRequest {
  carId: string
}

export class DeleteCarUseCase {
  constructor(
    private carsRepository: CarsRepository
  ) { }

  async execute({ carId }: deleteCarRequest) {
    // Verificando se o carro existe
    const car = await this.carsRepository.findById(carId)

    if(!car){
      throw new CarDoesNotExistsError()
    }

    return await this.carsRepository.deleteById(carId)
  }
}