import { makeListAllCarsUseCase } from "@/use-cases/factories/make-list-all-cars-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function ListAllCar(request: FastifyRequest, reply: FastifyReply) {
  const listAllCarsBodySchema = z.object({
    userId: z.string()
  })
  const { userId } = listAllCarsBodySchema.parse(request.params)


  const listAllCars = makeListAllCarsUseCase()
  const { cars } = await listAllCars.execute({ userId })

  return reply.status(200).send({ cars })

}