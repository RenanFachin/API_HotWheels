import { makeCreateCarUseCase } from "@/use-cases/factories/make-create-car-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'

export async function createCar(request: FastifyRequest, reply: FastifyReply) {
  const createCarBodySchema = z.object({
    // userId: z.string().cuid(),
    name: z.string(),
    year: z.string(),
    brand: z.string(),
    color: z.string()
  })

  const { name, year, brand, color } = createCarBodySchema.parse(request.body)


  try {
    const createCarUseCase = makeCreateCarUseCase()

    await createCarUseCase.execute({
      userId: request.user.sub,
      name,
      year,
      brand,
      color
    })

  } catch (error) {
    throw error
  }

  return reply.status(201).send()
}

