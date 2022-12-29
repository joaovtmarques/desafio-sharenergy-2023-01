import { InMemoryUserRepository } from '@/test/repositories/inMemoryUserRepository';
import { CreateUserService } from './../user/CreateUserService';
import { AuthUserService } from './AuthUserService';

describe('Authenticate an user', () => {
  it('should authenticate an user', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const authUserService = new AuthUserService(inMemoryUserRepository);
    const createUserService = new CreateUserService(inMemoryUserRepository);

    const data = {
      email: '_any@email.com',
      password: '_anypassword',
    };

    await createUserService.execute(data);

    const token = await authUserService.execute({ email: data.email, password: data.password });

    expect(token).toEqual(
      expect.objectContaining({
        token: expect.any(String),
      })
    );
  });
});
