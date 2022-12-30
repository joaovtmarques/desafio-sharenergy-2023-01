/* eslint-disable no-unused-vars */
import { UserModel } from '@/src/domain/models';

export interface CreateUserData {
  email: string;
  password: string;
}

export interface UserRepository {
  create(data: CreateUserData): Promise<UserModel>;

  findByEmail(email: string): Promise<UserModel | null>;

  findById(id: string): Promise<UserModel | null>;
}
