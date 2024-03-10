import { UsersRepository } from "@/repositories/interfaces/users-repository";

// tipagem de entrada
interface AuthenticateUseCaseRequest { }

// tipagem de resposta
interface AuthenticateUseCaseResponse { }

export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) { }


  async execute() {
    // autenticação
  }
}