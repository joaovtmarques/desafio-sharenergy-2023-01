import { CustomerRepository } from '@/src/infra/repositories';
import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpModel';

import { CustomerModel } from '../../models';
import { FindCustomerByIdService } from './FindCustomerByIdService';

export interface CreateCustomerRequest {
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  address: {
    street: string;
    district: string;
    zipcode: string;
    city: string;
    state: string;
  };
}

export class UpdateCustomerService {
  // eslint-disable-next-line no-unused-vars
  constructor(private customerRepository: CustomerRepository) {}

  async execute(customerId: string, data: CreateCustomerRequest): Promise<CustomerModel> {
    const findCustomerByIdService = new FindCustomerByIdService(this.customerRepository);
    const customer = await findCustomerByIdService.execute(customerId);

    if (!customer) {
      throw new BaseError('Customer not found', 'updateCustomer', HttpStatusCode.NOT_FOUND);
    }

    return await this.customerRepository.update(customerId, data);
  }
}
