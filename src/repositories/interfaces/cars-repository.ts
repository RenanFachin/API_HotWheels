import { Car, Prisma } from "@prisma/client";

// CarUncheckedCreateInput -> retorna também os relacionamentos que está tabela possui
export interface CarsRepository {
  create(data: Prisma.CarUncheckedCreateInput): Promise<Car>
  findById(carId: string): Promise<Car>
}