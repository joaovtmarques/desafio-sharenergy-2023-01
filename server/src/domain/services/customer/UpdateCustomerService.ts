import { CustomerRepository } from '@/src/infra/repositories';
import { CustomerModel } from '../../models';

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
    return await this.customerRepository.update(customerId, data);
  }
}
