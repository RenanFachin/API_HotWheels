import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Buscar o token dentro do header e, caso exista, validar que foi criado pela API
    await request.jwtVerify()
  } catch (error) {
    return reply.status(401).send({ message: "Unauthorized" })
  }
}