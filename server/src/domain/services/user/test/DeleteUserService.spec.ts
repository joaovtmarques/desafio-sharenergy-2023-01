import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';
import { InMemoryUserRepository } from '@/test/repositories/inMemoryUserRepository';

import { CreateUserService } from '../CreateUserService';
import { DeleteUserService } from '../DeleteUserService';
import { FindUserById } from '../FindUserByIdService';

describe('Delete an user', () => {
  it('should delete an user', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUserService = new CreateUserService(inMemoryUserRepository);
    const deleteUserService = new DeleteUserService(inMemoryUserRepository);
    const findUserById = new FindUserById(inMemoryUserRepository);

    const data = {
      email: '_any@email.com',
      password: '_anypassword',
    };

    const user = await createUserService.execute(data);

    await deleteUserService.execute(user.id);

    const userExists = await findUserById.execute(user.id);

    expect(userExists).toBeNull();
  });

  it('should return error when user not found', () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const deleteUserService = new DeleteUserService(inMemoryUserRepository);

    const action = async () => await deleteUserService.execute('_anyuserid');

    expect(action()).rejects.toThrow(
      new BaseError('User not found', 'deleteUser', HttpStatusCode.NOT_FOUND)
    );
  });
});
