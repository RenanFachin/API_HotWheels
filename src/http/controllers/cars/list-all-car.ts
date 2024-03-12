import { makeListAllCarsUseCase } from "@/use-cases/factories/make-list-all-cars-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function ListAllCar(request: FastifyRequest, reply: FastifyReply) {
  const listAllCars = makeListAllCarsUseCase()
  const { cars } = await listAllCars.execute({ userId: request.user.sub })

  return reply.status(200).send({ cars })

}