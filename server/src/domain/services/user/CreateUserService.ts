import { UserModel } from '@/src/domain/models';
import { UserRepository } from '@/src/infra/repositories';

interface CreateUserRequest {
  email: string;
  password: string;
}

export class CreateUserService {
  // eslint-disable-next-line no-unused-vars
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserRequest): Promise<UserModel> {
    return await this.userRepository.create(data);
  }
}
