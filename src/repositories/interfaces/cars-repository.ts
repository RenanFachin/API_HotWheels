import { Car, Prisma } from "@prisma/client";

// CarUncheckedCreateInput -> retorna também os relacionamentos que está tabela possui

interface carProps {
  name: string
  year: string
  brand: string
  color: string
}
export interface CarsRepository {
  create(data: Prisma.CarUncheckedCreateInput): Promise<Car>
  findById(carId: string): Promise<Car>
  update(carId: string, car: carProps): Promise<Car>
}