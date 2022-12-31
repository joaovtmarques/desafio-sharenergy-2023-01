import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';
import { InMemoryUserRepository } from '@/test/repositories/inMemoryUserRepository';
import { CreateUserService } from './../user/CreateUserService';
import { AuthUserService } from './AuthUserService';
import { RefreshTokenUserService } from './RefreshTokenUserSevice';

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

  it('should return error when user is not found', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const authUserService = new AuthUserService(inMemoryUserRepository);

    const action = async () => {
      await authUserService.execute({
        email: '_any@email.com',
        password: '_anypassword',
      });
    };

    expect(action()).rejects.toThrow(
      new BaseError('User not found', 'authenticateUser', HttpStatusCode.NOT_FOUND)
    );
  });

  it('should return error when providing wrong password', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const authUserService = new AuthUserService(inMemoryUserRepository);
    const createUserService = new CreateUserService(inMemoryUserRepository);

    const data = {
      email: '_any@email.com',
      password: '_anypassword',
    };

    await createUserService.execute(data);

    const action = async () => {
      await authUserService.execute({
        email: data.email,
        password: '_wrongpassword',
      });
    };

    expect(action()).rejects.toThrow(
      new BaseError('Incorrect email or password', 'authenticateUser', HttpStatusCode.BAD_REQUEST)
    );
  });

  it('should return the refresh token', async () => {
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
        refreshToken: expect.any(Object),
      })
    );
  });

  it('should return a new token based on a refresh token', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const authUserService = new AuthUserService(inMemoryUserRepository);
    const createUserService = new CreateUserService(inMemoryUserRepository);
    const refreshTokenService = new RefreshTokenUserService(inMemoryUserRepository);

    const data = {
      email: '_any@email.com',
      password: '_anypassword',
    };

    await createUserService.execute(data);

    const token = await authUserService.execute({ email: data.email, password: data.password });

    expect(token).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        refreshToken: expect.any(Object),
      })
    );

    const newToken = await refreshTokenService.execute(token.refreshToken.id);

    expect(newToken).toEqual(
      expect.objectContaining({
        token: expect.any(String),
      })
    );
  });

  it('should return error when providing invalid refresh token', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const refreshTokenService = new RefreshTokenUserService(inMemoryUserRepository);

    const action = async () => await refreshTokenService.execute('_invalidrefreshtoken');

    expect(action()).rejects.toThrow(
      new BaseError('Invalid refresh token', 'refreshToken', HttpStatusCode.BAD_REQUEST)
    );
  });
});
