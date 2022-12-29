import { UserModel } from '@/src/domain/models';

export interface CreateUserData {
  email: string;
  password: string;
}

export interface UserRepository {
  // eslint-disable-next-line no-unused-vars
  create(data: CreateUserData): Promise<UserModel>;
}
