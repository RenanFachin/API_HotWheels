import { CarDoesNotExistsError } from "@/use-cases/errors/car-does-not-exists-error";
import { makeDeleteCarUseCase } from "@/use-cases/factories/make-delete-car-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteCar(request: FastifyRequest, reply: FastifyReply) {
  const deleteCarParamsSchema = z.object({
    carId: z.string(),
  })

  const { carId } = deleteCarParamsSchema.parse(request.params)

  
  try {
    const deleteCar = makeDeleteCarUseCase()
    await deleteCar.execute({ carId })

  } catch (error) {

    if (error instanceof CarDoesNotExistsError) {
      return reply.status(409).send({ message: error.message })
    }

  }

  return reply.status(200).send()
}