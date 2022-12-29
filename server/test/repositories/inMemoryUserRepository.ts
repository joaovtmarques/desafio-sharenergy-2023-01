import { UserModel } from '@/src/domain/models';
import { User } from '@prisma/client';
import crypto from 'node:crypto';

import { UserRepository } from '../../src/infra/repositories';
import { CreateUserData } from '../../src/infra/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  async create(data: CreateUserData): Promise<UserModel> {
    const user = {
      id: crypto.randomUUID(),
      email: data.email,
      password: data.password,
      rememberMeToken: null,
      createdAt: new Date(),
    };

    this.items.push(user);

    return user;
  }
}
