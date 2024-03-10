import { Prisma } from "@prisma/client";
import { CarsRepository } from "../interfaces/cars-repository";
import { prisma } from "@/lib/prisma";


// CarUncheckedCreateInput -> retorna também os relacionamentos que está tabela possui
export class PrismCarsRepository implements CarsRepository {

  async create(data: Prisma.CarUncheckedCreateInput) {

    const newCar = await prisma.car.create({
      data
    })

    return newCar
  }

  async findById(carId: string) {
    const car = await prisma.car.findFirstOrThrow({
      where: {
        id: carId
      }
    })


    return car
  }
}