import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '@/use-cases/authenticate'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const auhenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = auhenticateBodySchema.parse(request.body)

  // Funcionalidade (use-case)
  try {
    // Aplicando a inversão de dependência
    // Este arquivo que deve enviar as dependências como parâmetro para o useCase
    const usersRepository = new PrismaUsersRepository()
    const authenticateUseCase = new AuthenticateUseCase(usersRepository)

    await authenticateUseCase.execute({
      email,
      password,
    })
  } catch (error) {

    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    // Mandando para a camada acima do controller
    throw error
  }

  return reply.status(200).send()
}
