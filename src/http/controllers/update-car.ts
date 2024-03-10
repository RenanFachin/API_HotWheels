import { makeUpdateCarUseCase } from "@/use-cases/factories/make-update-car";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function updateCar(request: FastifyRequest, reply: FastifyReply,) {
  const updateCarParamsSchema = z.object({
    carId: z.string(),
  })

  const updateCarBodySchema = z.object({
    name: z.string(),
    brand: z.string(),
    year: z.string(),
    color: z.string()
  })

  const { carId } = updateCarParamsSchema.parse(request.params)
  const { name, brand, year, color } = updateCarBodySchema.parse(request.body)

  // console.log(carId)
  // console.log(name, brand, year, color)

  const updateCar = makeUpdateCarUseCase()

  try {
    const car = await updateCar.execute({
      carId,
      car: {
        brand,
        color,
        name,
        year
      }
    })

    return reply.status(201).send({
      car
    })
  } catch (error) {
    throw error
  }
}