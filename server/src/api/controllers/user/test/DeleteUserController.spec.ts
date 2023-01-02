import { app } from '@/src/app';
import request from 'supertest';

describe('Delete user', () => {
  it('should delete an user', async () => {
    const data = {
      email: '_any@email.com',
      password: '_anypass',
    };

    const user = await request(app).post('/users').send(data);

    await request(app).delete(`/users/${user.body.id}`).send();

    const userExists = await request(app).get(`/users/${user.body.id}`).send();

    expect(userExists.status).toBe(404);
    expect(userExists.body.message).toBe(`User {${user.body.id}} not found`);
  });
});
