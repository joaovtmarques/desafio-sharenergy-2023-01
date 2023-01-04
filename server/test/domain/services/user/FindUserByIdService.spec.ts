import { InMemoryUserRepository } from '@/test/infra/repositories/inMemoryUserRepository';

import { CreateUserService } from '../CreateUserService';
import { FindUserByIdService } from '../FindUserByIdService';

describe.skip('Find user by id', () => {
  it('should find an user by id', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUserService = new CreateUserService(inMemoryUserRepository);
    const findUserById = new FindUserByIdService(inMemoryUserRepository);

    const data = {
      email: '_any@email.com',
      password: '_anypassword',
    };

    const user = await createUserService.execute(data);

    const userExists = await findUserById.execute(user.id);

    expect(userExists).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        email: data.email,
        createdAt: expect.any(String),
      })
    );
  });
});
