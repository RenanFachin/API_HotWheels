import { Car, Prisma } from "@prisma/client";
import { CarsRepository } from "../interfaces/cars-repository";
import { prisma } from "@/lib/prisma";


// CarUncheckedCreateInput -> retorna também os relacionamentos que está tabela possui
export class PrismaCarsRepository implements CarsRepository {

  async create(data: Prisma.CarUncheckedCreateInput) {

    const newCar = await prisma.car.create({
      data
    })

    return newCar
  }

  async findById(carId: string) {
    const car = await prisma.car.findUnique({
      where: {
        id: carId
      }
    })


    return car
  }

  async update(carId: string, car: Car) {
    const updatedCar = await prisma.car.update({
      where: {
        id: carId
      },
      data: {
        brand: car.brand,
        color: car.color,
        year: car.year,
        name: car.name
      }
    })

    return updatedCar
  }

  async deleteById(carId: string) {
     await prisma.car.delete({
      where: {
        id: carId
      }
     })

     return 
  }
}