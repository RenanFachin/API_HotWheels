import { UsersRepository } from '@/repositories/interfaces/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUserUseCaseRequest {
  name: string
  email: string
  password: string
}

// Cada classe de useCase vai ter sempre um método
// Ao utilizar uma classe, é possível utilizar o construtor. E este construtor pode receber as dependências

export class RegisterUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ name, email, password }: RegisterUserUseCaseRequest) {

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      // return reply.status(409).send()
      throw new Error('E-mail already exists!')
    }

    const password_hash = await hash(password, 6)

    // Instanciando o repository
    // SOLID -> Aplicando a inversão de dependência
    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
