import { UpdateCustomerService } from '@/src/domain/services/customer/UpdateCustomerService';
import { HttpRequest } from '@/src/shared/types/httpRequest';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';

export class UpdateCustomerController {
  constructor(private updateCustomerService: UpdateCustomerService) {}

  async handle({ req, res, next }: HttpRequest) {
    const { id } = req.params;
    const data = req.body;

    const updatedCustomer = await this.updateCustomerService.execute(id, data);

    return res.status(HttpStatusCode.OK).send(updatedCustomer);
  }
}
