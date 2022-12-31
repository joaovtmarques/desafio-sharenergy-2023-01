import { compare } from 'bcrypt';

import { UserRepository } from '@/src/infra/repositories';
import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';
import { GenerateToken, GenerateRefreshToken } from '@/src/domain/provider';

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  // eslint-disable-next-line no-unused-vars
  constructor(private userRepository: UserRepository) {}

  async execute(data: AuthRequest) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (!userExists) {
      throw new BaseError('User not found', 'authenticateUser', HttpStatusCode.NOT_FOUND);
    }

    if (!(await compare(data.password, userExists.password))) {
      throw new BaseError(
        'Incorrect email or password',
        'authenticateUser',
        HttpStatusCode.BAD_REQUEST
      );
    }

    const generateToken = new GenerateToken(this.userRepository);
    const token = await generateToken.execute(userExists.id);

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(userExists.id);

    return { token, refreshToken };
  }
}
