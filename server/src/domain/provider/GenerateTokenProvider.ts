import { sign } from 'jsonwebtoken';
import { UserModel } from '../models';

export class GenerateToken {
  async execute(user: UserModel) {
    return sign(user, `${process.env.JWT_SECRET}`, {
      subject: user.id,
      expiresIn: '5d',
    });
  }
}
