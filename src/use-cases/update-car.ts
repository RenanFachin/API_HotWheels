import { CarsRepository } from "@/repositories/interfaces/cars-repository";

interface carProps {
  name: string
  year: string
  brand: string
  color: string
}

interface updateCarRequest {
  carId: string
  car: carProps
}

export class UpdateCarUseCase {
  constructor(private carsRepository: CarsRepository) { }

  async execute({ carId, car }: updateCarRequest) {
    const updatedCar = await this.carsRepository.update(carId, car)

    return {
      ...updatedCar
    }
  }
}