import { app } from '@/src/app';
import request from 'supertest';

describe.skip('Find user by id', () => {
  it('should find user by id', async () => {
    const data = {
      email: '_any@email.com',
      password: '_anypass',
    };

    const response = await request(app).post('/users').send(data);

    const user = await request(app).get(`/users/${response.body.id}`).send();

    expect(user.status).toBe(200);
    expect(user.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        email: '_any@email.com',
      })
    );
  });
});
