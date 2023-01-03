import { app } from '@/src/app';
import supertest from 'supertest';

describe.skip('Create an customer', () => {
  it('should create an customer', async () => {
    const data = {
      name: '_anycustumer',
      email: '_any@email.com',
      phoneNumber: '00000000000',
      cpf: '000.000.000-00',
      street: '_anystreet, 000',
      district: '_anydistrict',
      zipcode: '00000000',
      city: '_anycity',
      state: '_anystate',
    };

    const customer = await supertest(app).post('/customers').send(data);

    expect(customer.status).toBe(201);
    expect(customer.body).toEqual(
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
      })
    );
  });

  it('should return error when data to create customer is not provided', async () => {
    const customer = await supertest(app).post('/customers').send({});

    expect(customer.status).toBe(400);
  });
});
