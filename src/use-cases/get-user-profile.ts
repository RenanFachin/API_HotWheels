import { UsersRepository } from "@/repositories/interfaces/users-repository";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

// tipagem de entrada
interface GetUserProfileUseCaseRequest {
  userId: string
}

// tipagem de resposta
interface GetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) { }


  async execute({ userId }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    // Buscar o usuário no db pelo email
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }
    
    return {
      user
    }
  }
}