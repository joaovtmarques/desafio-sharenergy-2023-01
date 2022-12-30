import crypto from 'node:crypto';
import { CustomerModel } from '@/src/domain/models';

import { CustomerRepository } from '@/src/infra/repositories';
import { CreateCustomerData } from '@/src/infra/repositories/CustomerRepository';

// import { BaseError } from '@/src/shared/classes/baseError';
// import { HttpStatusCode } from '@/src/shared/types/httpModel';

export class InMemoryCustomerRepository implements CustomerRepository {
  public items: CustomerModel[] = [];

  async create(data: CreateCustomerData): Promise<CustomerModel> {
    const customerId = crypto.randomUUID();

    const customer: CustomerModel = {
      id: customerId,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      cpf: data.cpf,
      address: {
        id: crypto.randomUUID(),
        street: data.street,
        district: data.district,
        zipcode: data.zipcode,
        city: data.city,
        state: data.state,
        customerId,
      },
    };

    this.items.push(customer);

    return customer;
  }
}
