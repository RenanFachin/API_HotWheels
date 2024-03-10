import { CarsRepository } from "@/repositories/interfaces/cars-repository"

interface CreateCarUseCaseRequest {
  userId: string
  name: string
  year: string
  brand: string
  color: string
}


export class CreateCarUseCase {
  constructor(private carsRepository: CarsRepository) { }

  async execute({ userId, name, year, brand, color }: CreateCarUseCaseRequest) {
    const car = await this.carsRepository.create({
      user_id: userId,
      name,
      year,
      brand,
      color
    })


    return {
      car
    }
  }
}
