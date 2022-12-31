import { CustomerRepository } from '@/src/infra/repositories';
import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpModel';

import { FindCustomerByIdService } from './FindCustomerByIdService';

export class DeleteCustomerService {
  // eslint-disable-next-line no-unused-vars
  constructor(private customerRepository: CustomerRepository) {}

  async execute(customerId: string): Promise<void> {
    const findCustomerByIdService = new FindCustomerByIdService(this.customerRepository);
    const customer = await findCustomerByIdService.execute(customerId);

    if (!customer) {
      throw new BaseError('Customer not found', 'deleteCustomer', HttpStatusCode.NOT_FOUND);
    }
    await this.customerRepository.delete(customer.id);
  }
}
