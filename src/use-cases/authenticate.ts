import { UsersRepository } from "@/repositories/interfaces/users-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";

// tipagem de entrada
interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

// tipagem de resposta
interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) { }


  async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    // Buscar o usuário no db pelo email
    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new InvalidCredentialsError()
    }    

    // Comparar a senha salva com a senha do parâmetro
    const doesPasswordMatches = await compare(password, user.password_hash)


    if(!doesPasswordMatches){
      throw new InvalidCredentialsError()
    }

    return {
      user
    }
  }
}