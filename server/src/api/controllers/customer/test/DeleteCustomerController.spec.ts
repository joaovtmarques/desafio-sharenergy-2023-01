import { app } from '@/src/app';
import supertest from 'supertest';

describe('Delete an customer', () => {
  it('should delete an customer', async () => {
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

    const response = await supertest(app).delete(`/customers/${customer.body.id}`).send();

    const customerExists = await supertest(app).get(`/customers/${customer.body.id}`).send();

    expect(response.status).toBe(200);
    expect(customerExists.body.message).toEqual(`Customer {${customer.body.id}} not found`);
    expect(customerExists.body.statusCode).toEqual(404);
    expect(customerExists.body.method).toEqual('findCustomerById');
  });
});
