import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'
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
    const authenticateUseCase = makeAuthenticateUseCase()

    const { user } = await authenticateUseCase.execute({
      email,
      password,
    })

    // registrando o token e o user_id no payload
    const token = await reply.jwtSign({}, {
      sign: {
        sub: user.id,
        expiresIn: '7d'
      }
    })


    return reply.status(200).send({
      token,
      user: {
        ...user,
        password_hash: undefined
      }
    })

  } catch (error) {

    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    // Mandando para a camada acima do controller
    throw error
  }


}
