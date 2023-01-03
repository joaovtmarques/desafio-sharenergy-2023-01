import { app } from '@/src/app';
import request from 'supertest';

describe.skip('Delete user', () => {
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

  it('should return error when user to delete not found', async () => {
    const userId = '_anyuserid';

    const response = await request(app).delete(`/users/${userId}`).send();

    expect(response.status).toBe(404);
    expect(response.body.message).toBe(`User {${userId}} not found`);
  });
});
