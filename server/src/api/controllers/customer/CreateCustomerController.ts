import { CreateCustomerService } from '@/src/domain/services/customer/CreateCustomerService';
import { HttpRequest } from '@/src/shared/types/httpRequest';

export class CreateCustomerController {
  constructor(private createCustomerService: CreateCustomerService) {}

  async handle({ req, res, next }: HttpRequest) {
    const data = req.body;

    const customer = await this.createCustomerService.execute(data);

    return res.status(201).send(customer);
  }
}
