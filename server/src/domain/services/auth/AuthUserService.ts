import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { UserRepository } from '@/src/infra/repositories';
import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpModel';
import { GenerateRefreshToken } from '@/src/domain/provider/GenerateRefreshTokenProvider';

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  // eslint-disable-next-line no-unused-vars
  constructor(private userRepository: UserRepository) {}

  async execute(data: AuthRequest) {
    const userExists = await this.userRepository.findByEmail(data.email);

    let token = '';
    let refreshToken;

    if (userExists) {
      if (!(await compare(data.password, userExists.password))) {
        throw new BaseError(
          'Incorrect email or password',
          'authenticateUser',
          HttpStatusCode.BAD_REQUEST
        );
      } else {
        token = sign({}, `${process.env.JWT_SECRET}`, {
          subject: userExists.id,
          expiresIn: '20d',
        });

        const generateRefreshToken = new GenerateRefreshToken();
        refreshToken = generateRefreshToken.execute(userExists.id);
      }
    } else {
      throw new BaseError('User not found', 'authenticateUser', HttpStatusCode.NOT_FOUND);
    }

    return { token, refreshToken };
  }
}
