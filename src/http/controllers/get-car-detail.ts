import { makeGetCarDetailUseCase } from "@/use-cases/factories/make-get-car-detail-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getCarDetail(request: FastifyRequest, reply: FastifyReply,) {
  const getCarDetailSchema = z.object({
    carId: z.string()
  })

  const { carId } = getCarDetailSchema.parse(request.params)

  console.log(carId)


  const getCarDetail = makeGetCarDetailUseCase()

  const car = await getCarDetail.execute({
    carId
  })


  return reply.status(201).send({
    ...car
  })
}