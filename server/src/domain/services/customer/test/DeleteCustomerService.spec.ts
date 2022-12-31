import { InMemoryCustomerRepository } from '@/test/repositories/inMemoryCustomerRepository';
import { CreateCustomerService } from '../CreateCustomerService';
import { DeleteCustomerService } from '../DeleteCustomerService';
import { FindCustomerByIdService } from '../FindCustomerByIdService';

describe('Delete an user', () => {
  it('should delete an costumer', async () => {
    const inMemoryCustomerRepository = new InMemoryCustomerRepository();
    const createCustomerService = new CreateCustomerService(inMemoryCustomerRepository);
    const findCustomerByIdService = new FindCustomerByIdService(inMemoryCustomerRepository);
    const deleteCustomerService = new DeleteCustomerService(inMemoryCustomerRepository);

    const data = {
      name: 'jojojo',
      email: '_any@email.com',
      phoneNumber: '00000000000',
      cpf: '000.000.000-00',
      street: '_anystreet, 000',
      district: '_anydistrict',
      zipcode: '00000000',
      city: '_anycity',
      state: '_anystate',
    };

    const customer = await createCustomerService.execute(data);

    await deleteCustomerService.execute(customer.id);

    const customerExists = await findCustomerByIdService.execute(customer.id);

    expect(customerExists).toBeNull();
  });
});
