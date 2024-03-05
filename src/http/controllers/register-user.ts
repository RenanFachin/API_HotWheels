import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { RegisterUserUseCase } from '@/use-cases/register-user'
import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

export async function registerUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  // Funcionalidade (use-case)
  try {
    // Aplicando a inversão de dependência
    // Este arquivo que deve enviar as dependências como parâmetro para o useCase
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUserUseCase(usersRepository)

    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (error) {

    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    // Mandando para a camada acima do controller
    throw error
  }

  return reply.status(201).send()
}
