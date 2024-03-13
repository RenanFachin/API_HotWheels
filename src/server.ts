import { app } from './app'
import { env } from './env/index.js'
import chalk from 'chalk'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT ? Number(env.PORT) : 3333,
  })
  .then(() => console.log(chalk.greenBright('🛸 HTTP Server Running!')))
