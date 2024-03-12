import fastify from 'fastify'

import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'
import chalk from 'chalk'
import fastifyJwt from '@fastify/jwt'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET
})

app.register(appRoutes)

// Error handler
app.setErrorHandler((error, request, reply) => {
  // Tratando erro de validação
  if (error instanceof ZodError) {
    return reply.status(400).send({ message: 'Validation error.', issues: error.format() })
  }


  if (env.NODE_ENV !== 'production') {
    console.error(chalk.bgRed.white(error))
  } else {

  }

  return reply.status(500).send({ message: 'Internal server error.' })
})