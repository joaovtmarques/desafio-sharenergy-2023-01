import { UserRepository } from '@/src/infra/repositories';
// import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  // eslint-disable-next-line no-unused-vars
  constructor(private userRepository: UserRepository) {}

  async execute(data: AuthRequest) {
    const userExists = await this.userRepository.findByEmail(data.email);

    const token = sign({}, `${process.env.JWT_SECRET}`, {
      subject: userExists.id,
      expiresIn: '20d',
    });

    return { token };
  }
}
