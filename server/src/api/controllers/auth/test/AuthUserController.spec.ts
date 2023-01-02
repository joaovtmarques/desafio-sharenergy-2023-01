import { app } from '@/src/app';
import supertest from 'supertest';
import request, { Response } from 'supertest';

describe('Authenticate an user', () => {
  let user: Response;

  const data = {
    email: '_any@email.com',
    password: '_anypass',
  };

  beforeEach(async () => {
    user = await request(app).post('/users').send(data);
  });

  afterEach(async () => {
    await request(app).delete(`/users/${user.body.id}`).send();
  });

  it('should authenticate an user', async () => {
    const response = await supertest(app).post('/login').send(data);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        refreshToken: expect.objectContaining({
          id: expect.any(String),
          expiresIn: expect.any(Number),
        }),
      })
    );
  });

  it('should return error when email or password is incorrect', async () => {
    const response = await supertest(app)
      .post('/login')
      .send({ email: '_anyincorrect@email.com', password: '_anyincorrectpass' });

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Incorrect email or password');
    expect(response.body.method).toEqual('authenticateUser');
    expect(response.body.statusCode).toEqual(400);
  });
});
