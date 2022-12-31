import { CreateUserService } from '@/src/domain/services/user/CreateUserService';
import { PrismaUserRepository } from '@/src/infra/repositories/prisma/PrismaUserRepository';
import { CreateUserController } from '.';

export const createUserFactory = () => {
  const usersRepository = new PrismaUserRepository();
  const createUser = new CreateUserService(usersRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
};
