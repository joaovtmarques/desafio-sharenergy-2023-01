import { hash } from 'bcrypt';
import crypto from 'node:crypto';
import { UserModel } from '@/src/domain/models';

import { UserRepository } from '../../src/infra/repositories';
import { CreateUserData } from '../../src/infra/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  public items: UserModel[] = [];

  async create(data: CreateUserData): Promise<UserModel> {
    const hashedPassword = await hash(data.password, 8);

    const user = {
      id: crypto.randomUUID(),
      email: data.email,
      password: hashedPassword,
      rememberMeToken: null,
      createdAt: new Date(),
    };

    this.items.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<UserModel> {
    let user = null;

    this.items.forEach((item) => {
      if (item.email === email) {
        user = item;
      }
    });

    if (user !== null) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }
}
