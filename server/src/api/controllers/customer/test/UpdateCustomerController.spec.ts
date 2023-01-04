import { app } from '@/src/app';
import supertest from 'supertest';

describe('Update an customer', () => {
  it('should update an customer', async () => {
    const data = {
      name: '_anycustomer',
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

    const updatedData = {
      name: '_updatedname',
      email: '_any@email.com',
      phoneNumber: '00000000000',
      cpf: '000.000.000-00',
      address: {
        street: '_anystreet, 000',
        district: '_anydistrict',
        zipcode: '00000000',
        city: '_updatedcity',
        state: '_anystate',
      },
    };

    const updatedCustomer = await supertest(app)
      .put(`/customers/${customer.body.id}`)
      .send(updatedData);

    expect(updatedCustomer.body).toEqual(
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

    expect(updatedCustomer.body).toEqual(
      expect.objectContaining({
        id: expect.stringContaining(customer.body.id),
        name: expect.stringContaining(updatedData.name),
        email: expect.stringContaining(customer.body.email),
        phoneNumber: expect.stringContaining(customer.body.phoneNumber),
        cpf: expect.stringContaining(customer.body.cpf),
        address: expect.objectContaining({
          id: expect.stringContaining(customer.body.address.id),
          street: expect.stringContaining(customer.body.address.street),
          district: expect.stringContaining(customer.body.address.district),
          zipcode: expect.stringContaining(customer.body.address.zipcode),
          city: expect.stringContaining(updatedData.address.city),
          state: expect.stringContaining(customer.body.address.state),
          customerId: expect.stringContaining(customer.body.id),
        }),
      })
    );

    await supertest(app).delete(`/customers/${customer.body.id}`).send();
  });
});
