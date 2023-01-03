import supertest from 'supertest';
import { app } from '@/src/app';

describe('Find all customers', () => {
  it('should find all customers', async () => {
    const customers = await supertest(app).get('/customers').send({});

    expect(customers.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          phoneNumber: expect.any(String),
          cpf: expect.any(String),
          address: expect.objectContaining({
            id: expect.any(String),
            street: expect.any(String),
            district: expect.any(String),
            zipcode: expect.any(String),
            city: expect.any(String),
            state: expect.any(String),
            customerId: expect.any(String),
          }),
        }),
      ])
    );
  });
});
