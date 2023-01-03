import { app } from '@/src/app';
import supertest from 'supertest';

describe('Find an customer by id', () => {
  it('should find an customer by id', async () => {
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

    const response = await supertest(app).get(`/customers/${customer.body.id}`).send();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.stringContaining(customer.body.id),
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
});
