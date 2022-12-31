import { app } from '@/src/app';
import request from 'supertest';

describe('Create user', () => {
  it('should create an user', async () => {
    const data = {
      email: '_any@email.com',
      password: '_anypass',
    };

    const response = await request(app).post('/users').send(data);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        email: '_any@email.com',
      })
    );
  });
});
