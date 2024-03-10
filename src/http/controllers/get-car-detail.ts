import { CarDoesNotExistsError } from "@/use-cases/errors/car-does-not-exists-error";
import { makeGetCarDetailUseCase } from "@/use-cases/factories/make-get-car-detail-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getCarDetail(request: FastifyRequest, reply: FastifyReply,) {
  const getCarDetailSchema = z.object({
    carId: z.string()
  })

  const { carId } = getCarDetailSchema.parse(request.params)

  
  // console.log(carId)
  try {
    const getCarDetail = makeGetCarDetailUseCase()
    const car = await getCarDetail.execute({
      carId
    })

    return reply.status(201).send({ ...car })
  } catch (error) {
    if (error instanceof CarDoesNotExistsError) {
      return reply.status(409).send({ message: error.message })
    }
  }
}