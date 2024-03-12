import chalk from "chalk";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply) {

  // Buscar o token dentro do header e, caso exista, validar que foi criado pela API
  await request.jwtVerify()

  console.log(chalk.blueBright('User id: ' + request.user.sub))

  return reply.status(200).send()
}