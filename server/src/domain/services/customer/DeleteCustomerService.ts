import { CustomerRepository } from '@/src/infra/repositories';

export class DeleteCustomerService {
  // eslint-disable-next-line no-unused-vars
  constructor(private customerRepository: CustomerRepository) {}

  async execute(customerId: string): Promise<void> {
    await this.customerRepository.delete(customerId);
  }
}
